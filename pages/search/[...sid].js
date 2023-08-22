import Search from "@/components/pages/search.page";
import config from "@/helpers/config";
import React from "react";

const Page = (props) => {
  return <Search {...props} />;
};

export async function getServerSideProps({ query }) {
  const { sid } = query;

  const item = config.products.filter((x) => x.value.includes(sid[0]));

  return { props: { result: item , search : sid[0]} };
}

export default Page;
