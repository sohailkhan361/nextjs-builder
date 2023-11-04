"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface ProductsProps {
    initialCount?: number;
}

function Products({ initialCount = 99 }: ProductsProps) {

    return (
        <div className={styles.Products}>
            <span className={styles.count}></span>
            <button className={styles.btn} onClick={() => {}}>
                Click Me
            </button>
        </div>
    );
}

export default Products;