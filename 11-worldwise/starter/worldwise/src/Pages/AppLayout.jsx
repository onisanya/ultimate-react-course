import PageNav from "../Components/PageNav";
import AppNav from "../Components/AppNav";
import Sidebar from "../Components/Sidebar";
import Map from "../Components/Map";
import styles from "./AppLayout.module.css";
import { useState, useEffect } from "react";



export default function AppLayout() {
  return (
    <>
      <div className={styles.app}>
        <AppNav />
        <Sidebar />
        <Map />
      </div>
    </>
  );
}
