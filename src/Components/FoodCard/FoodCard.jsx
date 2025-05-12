import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation()

    const handleAddToCart = food => {
        if (user && user.email) {
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: `${name}added to your cart...!`,
                            icon: "success",
                            draggable: true
                          });
                }
            })
        }
        else {

            Swal.fire({
                title: "You are not logged In..",
                text: "Please login add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            }); 433
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img src={image} alt="" />
            </figure>
            <p className='text-white absolute right-0 mr-4 mt-4 px-4  rounded bg-slate-900'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title ">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className='my-4 btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-400  mt-4'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;