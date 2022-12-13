import React from 'react';

const Categories = () => {
  const data = [
    {
      cateImg: 'https://zweisoms163.github.io/react-website/images/category/cat1.png',
      cateName: 'Fashion',
    },
    {
      cateImg: 'https://zweisoms163.github.io/react-website/images/category/cat2.png',
      cateName: 'Electronic',
    },
    {
      cateImg: 'https://zweisoms163.github.io/react-website/images/category/cat3.png',
      cateName: 'Cars',
    },
    {
      cateImg: 'https://zweisoms163.github.io/react-website/images/category/cat4.png',
      cateName: 'Home & Garden',
    },
    {
      cateImg: 'https://zweisoms163.github.io/react-website/images/category/cat5.png',
      cateName: 'Gifts',
    },
    {
      cateImg: 'https://zweisoms163.github.io/react-website/images/category/cat6.png',
      cateName: 'Music',
    },
    {
      cateImg: 'https://zweisoms163.github.io/react-website/images/category/cat7.png',
      cateName: 'Health & Beauty',
    },
    {
      cateImg: 'https://zweisoms163.github.io/react-website/images/category/cat8.png',
      cateName: 'Pets',
    },
    {
      cateImg: 'https://zweisoms163.github.io/react-website/images/category/cat9.png',
      cateName: 'Baby Toys',
    },
    {
      cateImg: 'https://zweisoms163.github.io/react-website/images/category/cat10.png',
      cateName: 'Groceries',
    },
    {
      cateImg: 'https://zweisoms163.github.io/react-website/images/category/cat11.png',
      cateName: 'Books',
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
