export default function Header(props) {
  const { user } = props.userStuff;
  return (
    <header>
      {`${user.firstName} ${user.lastName}`}
    </header>
  );
}

