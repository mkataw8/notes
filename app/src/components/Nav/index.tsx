export default function Nav() {
  return (
    <div>
      <nav className="bg-blue-900 h-14 w-full flex place-content-between px-20 items-center">
        <h1 className=" flex justify-center text-5xl text-white ">Notes</h1>
        <ul className="flex space-x-1 text-white text-sm">
          <li>
            <a href="">ONE</a>
          </li>
          <li>
            {" "}
            <a href="">TWO</a>
          </li>
          <li>
            {" "}
            <a href="">THREE</a>
          </li>
          <li>
            {" "}
            <a href="">FOUR</a>
          </li>
        </ul>
        <ul className="flex text-white ">
          <li>Login</li>/<li>SignUp</li>
        </ul>
      </nav>
    </div>
  );
}
