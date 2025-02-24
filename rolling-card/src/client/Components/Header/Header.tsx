const Header = () => {
  return (
    <header className="w-screen h-16 bg-cyan-800">
      <div className="flex justify-around h-full items-center">
        <div>RollingCard</div>
        <ul className="flex w-1/4 justify-between">
          <li>first</li>
          <li>second</li>
          <li>third</li>
        </ul>
        <div>
          <button className="bg-orange-500 p-2">Quick start</button>
        </div>
        <div>
          <button>SignIn/SignUP</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
