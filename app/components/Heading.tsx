'use client';

interface HeadingProps {
    title : string,
    subTitle? : string,
    center?: boolean
}


const Heading:React.FC<HeadingProps>= ({
    title,
    subTitle,
    center = false,
}) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
        <h3 className="text-2xl font-bold">
            {title}
        </h3>
        {subTitle && (
            <div className="font-light text-neutral-500 mt-2">
                {subTitle}
            </div>
        )}


    </div>
  )
}

export default Heading