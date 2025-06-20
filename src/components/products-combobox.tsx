"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { Product } from "@/lib/services/products";

interface Props {
  products: Product[];
  selectedProduct: Product | null;
  query: string;
  onQueryChange: (query: string) => void;
  onProductSelect: (id: number) => void;
  renderProductItem: (product: Product) => React.ReactNode;
  isLoading: boolean;
}

export function ProductsCombobox({
  products,
  selectedProduct,
  query,
  onQueryChange,
  onProductSelect,
  renderProductItem,
  isLoading,
}: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[400px] justify-between"
        >
          {selectedProduct
            ? renderProductItem(selectedProduct)
            : "Select a product"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search products..."
            className="h-9"
            value={query}
            onValueChange={onQueryChange}
          />
          <CommandList>
            <CommandEmpty>No products found.</CommandEmpty>
            <CommandGroup>
              {products.map((product) => (
                <CommandItem
                  key={product.id}
                  value={product.id.toString()}
                  onSelect={(currentValue) => {
                    onProductSelect(Number(currentValue));
                    setOpen(false);
                  }}
                >
                  {renderProductItem(product)}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedProduct?.id === product.id
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
              {isLoading && (
                <CommandItem className="flex justify-center items-center">
                  <Loader2 className="animate-spin" />
                </CommandItem>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
