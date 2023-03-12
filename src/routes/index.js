import {FullLayout, HalfLayout} from "../layouts";
import Home from "../pages/Home";
import Reading from "../pages/Reading";

const publicRoutes = [
    {path: "/", component: Home, layout: FullLayout},
    {path: "/category/comic", component: Reading, layout: HalfLayout}
]

export {publicRoutes}