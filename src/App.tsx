import { ProductsCombobox } from "@/components/products-combobox";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-2">
        <p>Select a product</p>
        <ProductsCombobox
          products={[]}
          selectedProduct={null}
          query=""
          onQueryChange={() => {}}
          onProductSelect={() => {}}
          renderProductItem={() => <div>Product</div>}
        />
      </div>
    </div>
  );
}

export default App;
