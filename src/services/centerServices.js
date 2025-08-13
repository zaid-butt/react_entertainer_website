import React, {useCallback, useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
 
export {
  React,
  useCallback,
  useEffect,
  useState,
  useRef,
  Helmet,
  useParams,
  useTranslation,
  useSelector,
  useDispatch,
};

var siteUrl = null;
function setSiteUrl(velue) {
  siteUrl=velue
}
const currentLocationId = (id) => {
   localStorage.setItem("location_id", id);
}

export {setSiteUrl, siteUrl, currentLocationId}