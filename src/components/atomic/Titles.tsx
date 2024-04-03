import React from 'react'
import './styles/titles.css'

type PrincipalTitlesProps = {
  title: string;
  fontSize: string;
  animation: string;
  color: string;
};

type ParragraphProps = {
  text: string;
  fontSize: string;
  animation: string;
  color: string;
}
type TitlesProps = {
  text: string;
  fontSize: string;
  animation: string;
  color: string;
}

export const PrincipalTitles = React.forwardRef<HTMLSpanElement, PrincipalTitlesProps>(
  ({ title, fontSize, animation, color }, ref) => {
    return (
      <span ref={ref} className={`principal-title ${fontSize} ${animation} ${color}`}>
        {title}
      </span>
    );
  }
);

export const Titles = React.forwardRef<HTMLSpanElement, TitlesProps>(
  ({text, fontSize, animation, color}, ref) => {
    return(
      <span ref={ref} className={`h1-title ${fontSize} ${animation} ${color}`}>
        {text}
      </span>
    )
  }
)

export const Parragraph = React.forwardRef<HTMLSpanElement, ParragraphProps> (
  ({text, animation, fontSize, color}, ref) =>{
  return (
    <span ref={ref} className={`parrafos ${fontSize} ${animation} ${color}`}>
      {text}
    </span>
  )
}
)