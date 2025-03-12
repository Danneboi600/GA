import { useState } from "react";
import { Product } from "../types/Product";

interface Props {
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Form = ({ setProducts }: Props) => {
    const [file, setFile] = useState<File | null>(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      setFile(target.files ? target.files[0] : null);
      };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!file) {
            alert("Please select an image before submitting!");
            return;
        }
    
        const formData = new FormData();
        formData.append("image", file);
        formData.append("productNames", name);
        formData.append("productPrices", price);
    
        try {
            const response = await fetch("https://orange-carnival-979p44qgprgw377vp-3000.app.github.dev/upload", {
                method: "POST",
                body: formData,
            });
    
            const newProduct = await response.json();
            console.log("Upload success:", newProduct);
    
            //Update state immediately without refreshing
           
            setProducts((prevProducts) => [...prevProducts, newProduct]);
        
        
            // Optional: Reset form fields after submission
            setName("");
            setPrice("");
            setFile(null);
    
        } catch (error) {
            console.error("Upload failed:", error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <label>Form</label>
                <br />
                <input type="text" name="productNames" placeholder="Product name" onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="text" name="productPrices" placeholder="Product price" onChange={(e) => setPrice(e.target.value)} />
                <br />
                <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
                <br />
                <input type="submit" value="Send" />
        </form>
    );
};

export default Form;