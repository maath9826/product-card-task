import { render, screen } from "@testing-library/react";
import {
  ProductCard,
  noDescription,
  noName,
  noPrice,
  placeholderImage,
  wrongDataType,
} from "./ProductCard"; // Adjust the import path as needed

describe("ProductCard", () => {
  it("renders the product card with the correct props", () => {
    const name = "Test Product";
    const description = "This is a test product";
    const price = 19.99;
    const imgUrl =
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80";

    render(
      <ProductCard
        name={name}
        description={description}
        price={price}
        imgUrl={imgUrl}
      />
    );

    // Check if the component renders with the correct name, description, and price
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText("$" + price)).toBeInTheDocument();

    // Check if the image renders with the correct imgUrl text
    const image = screen.getByAltText("product");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", imgUrl);
  });

  it("renders the product card missing props", () => {
    render(<ProductCard />);

    // Check if the component renders with the correct name, description, and price
    expect(screen.getByText(noName)).toBeInTheDocument();
    expect(screen.getByText(noDescription)).toBeInTheDocument();
    expect(screen.getByText(noPrice)).toBeInTheDocument();

    // Check if the image renders with the correct imgUrl text
    const image = screen.getByAltText("product");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", placeholderImage);
  });
});
