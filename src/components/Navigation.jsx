import '../index.css'
export default function Navigation(props){
    
    return(<>
        <nav>
            <a  className="title" onClick={props.handleHome}>Carl Hari</a>

            <div className="nav-buttons">
                <li><a  onClick={props.handleAbout}>About</a></li>
                <li><a  onClick={props.handleWorks}>Works</a></li>
                <li><a  onClick={props.handleContact}>Contact</a></li>
                <li><a  onClick={props.handleResume}>Resume</a></li>
            </div>
        </nav>
    </>)
}