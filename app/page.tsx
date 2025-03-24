import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "./_components/header";

const Home = () => {
  return (
    <div className="w-full space-y-8 p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Visão geral</HeaderSubtitle>
          <HeaderTitle>Dashboard</HeaderTitle>
        </HeaderLeft>
      </Header>
    </div>
  );
};

export default Home;
