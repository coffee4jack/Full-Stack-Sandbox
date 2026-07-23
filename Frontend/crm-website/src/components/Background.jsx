function Background({ color1 = '#0f172a', color2 = '#1e1b4b' }) {
    const gradientStyle = {
        background: `linear-gradient(120deg, ${color1}, ${color2})`,
    };

    return (
        <div
            className="fixed inset-0 -z-10 w-full h-full"
            style={gradientStyle}
        />
    );
}

export default Background
