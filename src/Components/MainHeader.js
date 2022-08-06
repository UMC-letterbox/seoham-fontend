

function MainHeader(){
    return (
        <div className="flex p-5 bg-red-200">
            <div className="text-2xl">
                서함
            </div>
            <div className="flex-grow"></div>
            <div className="w-8 h-4">
                <img src="assets/user.png"/>
            </div>
        </div>
    )
}

export default MainHeader;