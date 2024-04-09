"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getPath } from "@/utils";
import subdomains from "@/subdomains";

const Converter = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`${getPath(subdomains.SIGNATURE)}batchsign`);
  }, []);

  return <></>;
};

export default Converter;
