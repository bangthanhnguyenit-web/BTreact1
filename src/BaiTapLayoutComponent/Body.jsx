import React from 'react';
import Banner from './Banner';
import Item from './Item';

export default function Body() {
  return (
    <div>
      <Banner />
      <section className="pt-4">
        <div className="container px-lg-5">
          {/* Sử dụng col-lg-3 để 4 card chia đều 12 cột (mỗi card chiếm 3 cột) */}
          <div className="row gx-lg-5">
            <div className="col-lg-3 mb-5">
              <Item />
            </div>
            <div className="col-lg-3 mb-5">
              <Item />
            </div>
            <div className="col-lg-3 mb-5">
              <Item />
            </div>
            <div className="col-lg-3 mb-5">
              <Item />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}