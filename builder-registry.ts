"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Products from "./components/Products/Products";

Builder.registerComponent(Counter, {
  name: "MyCounter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Products, {
  name: "Products",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
