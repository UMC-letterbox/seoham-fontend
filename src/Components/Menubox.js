function Menubox({menuContents, menuFunc}){


    return(
        <ul className="menuBtn bg-white p-3 rounded-md shadow-xl buri text-sm">
            {menuContents.map((content, index) => (
                <li key={index}><button className="my-1" onClick={menuFunc[index]}>{content}</button></li>
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