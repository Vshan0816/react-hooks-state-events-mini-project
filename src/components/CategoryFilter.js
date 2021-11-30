import React from "react";


function CategoryFilter({categories}) {
  const handleSelected = (e)=>{
    e.target.parentNode.childNodes.className = ""
    e.target.className = "selected"
  }
  const categoryMap = categories.map((category)=>{
    return <button key={category} onClick={handleSelected}>{category}</button>
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryMap}
    </div>
  );
}

export default CategoryFilter;
