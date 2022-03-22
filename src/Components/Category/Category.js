import './Category.css'

const Category = () => {

    return (
        <div className="container d-flex justify-content-center col-12">
            <button className="btn mt-4 fs-5 fw-bold">Breakfast</button>
            <button className="btn mt-4 fs-5 fw-bold ms-5">Lunch</button>
            <button className="btn mt-4 fs-5 fw-bold ms-5">Dinner</button>
        </div>
    );
};

export default Category;