import React from 'react';

export default function Item() {
  return (
    <div className="card h-100 shadow-sm border-0">
      {/* Thêm phần hình ảnh placeholder 500x325 ở đầu card */}
      <img 
        className="card-img-top" 
        src="https://dummyimage.com/500x325/dee2e6/6c757d.jpg" 
        alt="..." 
      />
      <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
        {/* Nếu bạn vẫn muốn giữ icon thì có thể để lại, nhưng theo hình mẫu là ảnh 500x325 */}
        <h2 className="fs-4 fw-bold mt-4">Card title</h2>
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
      </div>
      <div className="card-footer bg-transparent p-4 pt-0 border-top-0 text-center">
        <a className="btn btn-primary btn-sm" href="#!">Find Out More!</a>
      </div>
    </div>
  );
}