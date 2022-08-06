function Menubox({menuContents, menuFunc}){


    return(
        <ul className="menuBtn bg-white p-3 rounded-md shadow-xl">
            {menuContents.map((content, index) => (
                <li key={index}><button onClick={menuFunc[index]}>{content}</button></li>
            ))}
        </ul>
    );
}

/*
Menubox.propTypes = {
    menuContents: PropTypes.array.isRequired,
};
*/
export default Menubox;