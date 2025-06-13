function CustomIcon({ src, alt = "", className = "" }) {
	return <img src={src} alt={alt} className={`custom-icon ${className}`} />;
}

export default CustomIcon;
