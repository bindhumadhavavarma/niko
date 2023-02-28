import React, { useState } from 'react';
import Lefttab from './components/Lefttab';
import Righttab from './components/Righttab';

const Messages = () => {
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [menuStyles, setMenuStyles] = useState({ display: "block" })
 

	const toggleMenu = () => {
		setIsCollapsed(!isCollapsed)
		if (!isCollapsed) {
			document.getElementById("sideMenu").classList.remove("col-3")
			document.getElementById("chat").classList.remove("col-9")
			document.getElementById("chat").classList.add("col-12")
			setMenuStyles({ display: "none" })
		} else {
			document.getElementById("sideMenu").classList.add("col-3")
			document.getElementById("chat").classList.add("col-9")
			document.getElementById("chat").classList.remove("col-12")
			setMenuStyles({ display: "block" })
		}
	}

	return (
		<>
			<div className="row">
				<div className="col-xl-12">
					<div className="card" style={{ height: "calc(100vh - 5rem)" }}>
						<div className="card-body p-0">
							<div className="row">
								<Lefttab isCollapsed={isCollapsed} toggleMenu={toggleMenu} menuStyles={menuStyles}></Lefttab>
								<Righttab isCollapsed={isCollapsed} toggleMenu={toggleMenu}></Righttab>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Messages;