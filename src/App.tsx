import { ProductsCombobox } from "@/components/products-combobox";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-2">
        <p>Select a product</p>
        <div className="flex gap-2 items-center">
          <ProductsCombobox
            products={[]}
            selectedProduct={null}
            query={""}
            onQueryChange={() => {}}
            onProductSelect={() => {}}
            renderProductItem={() => <div>Product</div>}
          />
          <Button className="w-fit" size="sm">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
