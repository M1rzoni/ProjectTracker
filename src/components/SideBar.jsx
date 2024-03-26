import "./style/SideBar.css";

function SideBar(props) {
  return (
    <div className="container">
      <div className="sidebar-container">
        <a onClick={props.show} href="#Kalendar">
          Kalendar
        </a>
        <div className="padajuci-meni">
          <a href="#Projekti">Projekti</a>
          <div className="kontent">
            <a href="#">Izgradnja Ceste</a>
            <a href="#">Komunalna Infrastruktura</a>
            <button onClick={props.handle} className="btn">Dodaj Projekat</button>
          </div>
        </div>
        <a href="#Učesnici">Učesnici</a>
      </div>
    </div>
  );
}

export default SideBar;
