import React from "react";

export default function Typography() {
  return (
    <div className="bg-slate-50 h-screen w-screen text-center">
      <div className="text-4xl my-4">Typography</div>

      <div className="text-xl my-4">Container</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <div className="container my-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
          nihil quidem! Rem architecto unde minus soluta ad accusantium voluptas
          dignissimos doloremque! In nemo, consequuntur nam necessitatibus
          aperiam repudiandae esse debitis?
        </div>
      </div>

      <div className="text-xl my-4">Margin</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <div className="container my-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
          nihil quidem! Rem architecto unde minus soluta ad accusantium voluptas
          dignissimos doloremque! In nemo, consequuntur nam necessitatibus
          aperiam repudiandae esse debitis?
        </div>
      </div>

      <div className="text-xl my-4">Padding</div>
      <div className="border-2 rounded-xl border-gray-300 mx-6 p-6">
        <div className="container my-auto p-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
          nihil quidem! Rem architecto unde minus soluta ad accusantium voluptas
          dignissimos doloremque! In nemo, consequuntur nam necessitatibus
          aperiam repudiandae esse debitis?
        </div>
      </div>
    </div>
  );
}
