import Navbar from "@/components/Navbar";

const { default: Link } = require("next/link")

const App = () => {
    return ( <header>
        <div className = "navarea" >
        <
        Link href = "/#"
        className = "logo" >
        CodeSolution </Link> <Navbar/>
        </div> </header >
    );
};

export default App;