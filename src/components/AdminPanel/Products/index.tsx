"use client";
import React, { useState } from 'react';

const AddProduct: React.FC = () => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [category, setCategory] = useState<string>('wash_and_fold');
    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        sku: '',
        stock: '',
        price: '',
    });
    const [errors, setErrors] = useState({
        productName: '',
        description: '',
        sku: '',
        stock: '',
        price: '',
        image: '',
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
            setErrors((prev) => ({ ...prev, image: '' }));
        } else {
            setErrors((prev) => ({ ...prev, image: 'This field is required' }));
        }
    };

    const handleCategoryClick = (category: string) => {
        setCategory(category);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let isValid = true;
        let newErrors = { ...errors };

        Object.keys(formData).forEach((key) => {
            if (!formData[key as keyof typeof formData]) {
                newErrors[key as keyof typeof errors] = 'This field is required';
                isValid = false;
            }
        });

        if (!imagePreview) {
            newErrors.image = 'This field is required';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            console.log('Form Submitted', formData, category);
        }
    };

    return (
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#303030] sm:mb-15 mb-10">Add New Product</h2>
            
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
                {/* Form Section */}
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="productName" className="text-sm font-medium mb-2">Product Name</label>
                        <input
                            id="productName"
                            className="p-2 border border-[#3B97CB] rounded"
                            placeholder="Product Name"
                            value={formData.productName}
                            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                        />
                            {errors.productName && <p className="text-red text-sm">{errors.productName}</p>}
                        </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-sm font-medium mb-2">Description</label>
                        <textarea
                            id="description"
                            className="p-2 border border-[#3B97CB] rounded"
                            placeholder="Description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                            {errors.description && <p className="text-red text-sm">{errors.description}</p>}
                    </div>
                    
                    <div className="flex space-x-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="sku" className="text-sm font-medium mb-2">SKU</label>
                            <input
                                id="sku"
                                className="p-2 border border-[#3B97CB] rounded w-full"
                                placeholder="SKU"
                                value={formData.sku}
                                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                            />
                            {errors.sku && <p className="text-red text-sm">{errors.sku}</p>}
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="stock" className="text-sm font-medium mb-2">Stock</label>
                            <input
                                id="stock"
                                className="p-2 border border-[#3B97CB] rounded w-full"
                                placeholder="Stock"
                                value={formData.stock}
                                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                            />
                            {errors.stock && <p className="text-red text-sm">{errors.stock}</p>}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="category" className="text-sm font-medium mb-2">Category</label>
                        <div className="flex flex-wrap gap-2">
                            {/* Mengubah tombol menjadi interaktif berdasarkan kategori yang dipilih */}
                            <button
                                type="button"
                                onClick={() => handleCategoryClick('wash_and_fold')}
                                className={`px-4 py-2 rounded border border-[#3B97CB] ${category === 'wash_and_fold' ? 'bg-[#3B97CB] text-white shadow-lg' : 'bg-[#CAECFF] text-[#3B97CB]'}`}
                            >
                                Wash and Fold
                            </button>
                            <button
                                type="button"
                                onClick={() => handleCategoryClick('dry_clean')}
                                className={`px-4 py-2 rounded border border-[#3B97CB] ${category === 'dry_clean' ? 'bg-[#3B97CB] text-white shadow-lg' : 'bg-[#CAECFF] text-[#3B97CB]'}`}
                            >
                                Dry Clean
                            </button>
                            <button
                                type="button"
                                onClick={() => handleCategoryClick('home')}
                                className={`px-4 py-2 rounded border border-[#3B97CB] ${category === 'home' ? 'bg-[#3B97CB] text-white shadow-lg' : 'bg-[#CAECFF] text-[#3B97CB]'}`}
                            >
                                Home
                            </button>
                            <button
                                type="button"
                                onClick={() => handleCategoryClick('others')}
                                className={`px-4 py-2 rounded border border-[#3B97CB] ${category === 'others' ? 'bg-[#3B97CB] text-white shadow-lg' : 'bg-[#CAECFF] text-[#3B97CB]'}`}
                            >
                                Others
                            </button>
                        </div>
                    </div>
                   
                    <div className="flex flex-col">
                        <label htmlFor="price" className="text-sm font-medium mb-2">Price</label>
                        <input
                            id="price"
                            className="p-2 border border-[#3B97CB] rounded"
                            placeholder="Price"
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        />
                            {errors.price && <p className="text-red text-sm">{errors.price}</p>}
                    </div>

                    {/* Image Upload Section on Mobile */}
                    <div className="grid items-center justify-center text-center pt-1 bg-white rounded-3xl h-52 w-full sm:hidden">
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="Image preview"
                                className="w-35 h-36 object-cover mb-1"
                            />
                        )}

                        <label htmlFor="imageUpload" className="cursor-pointer">
                            <input
                                id="imageUpload"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <span className="text-blue-500 font-bold underline pb-4 cursor-pointer">Upload image here</span>
                        </label>   
                        {errors.image && <p className="text-red text-sm">{errors.image}</p>}                
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Publish</button>
                </form>


                {/* Image Upload Section on Desktop*/}
                <div className="hidden sm:flex w-1/5">
                    <div className="bg-white h-65 w-full flex flex-col items-center justify-center text-center">
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="Image preview"
                                className="w-35 h-45 object-cover mb-4"
                            />
                        )}

                        <label className="cursor-pointer">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <span className="text-blue-500 font-bold underline pb-4 cursor-pointer">Upload image here</span>
                        </label>
                        {errors.image && <p className="text-red text-sm">{errors.image}</p>}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;
