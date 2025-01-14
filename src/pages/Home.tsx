//플랫폼 홈

function Home({ title }: { title: string }) {
  return (
    <>
      <title>{title}</title>
      <section className="flex justify-center mt-10 w-full h-full">
        <h1 className="text-4xl">홈 입니다.</h1>
      </section>
    </>
  );
}

export default Home;
