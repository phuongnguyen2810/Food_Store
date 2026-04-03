/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function HomePage() {
  
  // Bước 1: Gọi API xin dữ liệu
  // cache: 'no-store' nghĩa là luôn lấy cơm mới, không dùng lại cơm cũ (cache)
  const res = await fetch('http://localhost:3000/', { cache: 'no-store' });
  
  // Bước 2: Dịch dữ liệu thô thành mảng JavaScript
  const products = await res.json();
  console.log(products)
  // Bước 3: Giao diện (HTML) trả về cho người dùng
  return (
    <div style={{ padding: '20px' }}>
      <h1>🍚 Menu Quán Cơm Tấm localhost</h1>
      
      {/* Vùng chứa các món ăn */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* Bước 4: Vòng lặp map() in ra từng món */}
        {products.map((product: any) => (
          
          // Mỗi món ăn phải có một 'key' duy nhất (id) để Next.js quản lý
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px' }}>
            <h2>{product.name}</h2>
            <p>Giá: {product.price} VNĐ</p>
            {/* Dùng toán tử 3 ngôi: Nếu có description thì in ra, không thì in chữ 'Đang cập nhật' */}
            <p>Mô tả: {product.description ? product.description : 'Đang cập nhật'}</p>
          </div>
           
        ))}

      </div>
    </div>
  );
}