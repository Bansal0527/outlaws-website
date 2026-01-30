const Marquee = () => {
    const items = [
        "FREE SHIPPING OVER ₹1499",
        "★",
        "NEW DROPS EVERY WEEK",
        "★",
        "PREMIUM QUALITY",
        "★",
        "EASY RETURNS",
        "★",
        "FREE SHIPPING OVER ₹1499",
        "★",
        "NEW DROPS EVERY WEEK",
        "★",
        "PREMIUM QUALITY",
        "★",
        "EASY RETURNS",
        "★",
    ];

    return (
        <div className="bg-secondary py-3 overflow-hidden">
            <div className="flex animate-marquee">
                {items.map((item, index) => (
                    <span
                        key={index}
                        className="mx-8 text-sm font-medium text-foreground whitespace-nowrap tracking-wider"
                    >
                        {item}
                    </span>
                ))}
                {items.map((item, index) => (
                    <span
                        key={`repeat-${index}`}
                        className="mx-8 text-sm font-medium text-foreground whitespace-nowrap tracking-wider"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
