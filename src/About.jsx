import IllIni from '/photos/illini.gif'

export default function About() {
  return (
    <div className="p-10 border-2 border-red-500 ">
      <h1 className="text-5xl">
        ABOUT ME
      </h1>
      <p className="text-2xl">
        I went to the 
        <span className="text-orange-500"> University of Illinois in Urbana Champaign </span>
        for 
        <span className="text-orange-500"> Computer Engineering</span>
      </p>
      <img src={IllIni} alt="Illini" className="max-w-full image-" />
    </div>
  )
}