import Categories from "@/components/pages/categories.page";
import config from "@/helpers/config";
import React from "react";

const Page = (props) => {
  return <Categories {...props} />;
};

export async function getServerSideProps({ query }) {
  const { cid } = query;

  const item = config.categories.filter((x) => x.value === cid[0]);

  if (item.length > 0) {
    return { props: { category: item[0] } };
  } else {
    return { notFound: true };
  }
}

export default Page;
