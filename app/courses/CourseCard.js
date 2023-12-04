export default function CourseCard({ comments, description, name, periods, prereqs, teacher }) {
  return (
    <div className="relative rounded-lg lg:w-[60vw] w-[90vw] bg-primary lg:mb-0 mb-[25px] text-text mx-2 px-[10px] text-[20px]">
      <p className="text-[30px] top-[5px] font-bold absolute left-1/2 -translate-x-1/2 w-max">{name}</p>
      <p className="font-light pt-[50px]">{description}</p>

      <p className="pt-[20px]">Teacher: {teacher}</p>
      <p>Prereqs: {prereqs}</p>

      {
        (comments.length > 0) && (
          <>
            <p className="pt-[20px]">Student Comments:</p>
              <ul className="ml-[20px] pb-[10px] list-disc">
                {comments.map((comment, i) => (
                  <li className="font-light" key={i}>{comment}</li>
                ))}
            </ul>
          </>
        )
      }
    </div>
  );
}

/*
      {
        "comments": [
          "Ms. Mazzurco is nice, but the course and discussions felt very surface level. The homework is usually just reading and annotating",
          "I'm taking Existentialism now and I enjoy it a lot - don't take it if you don't like talking in depth about morals and stuff. The reading can be dense because people didn't like to proofread, but the class is chill overall!",
          "Out of Existentialism, Creative Nonfiction, and Sci-Fi, I think Existentialism was the hardest but it was also my favorite. I think it's especially great if you're religious since Existentialism is usually an atheist philosophy so it's a great chance to see different perspectives and how they're the same or different from yours.",
          "Existentialism is a good class. If you're someone striving to get 95+ in the class, that'll be difficult, but 90+ should be more than manageable. I took it as a senior, and I just sat back, relaxed (did all the work without stressing about grades), and learned a lot. Existentialism gives you a few new perspectives to see life through, and it's quite fascinating."
        ],
        "description": "Existentialism is a single-semester selective that stresses fervent individualism in the face of an irrational universe. It, along with Absurdism, uplifts the \"rebel,\" that individual who is courageous enough to rise above codified existence and live authentically. These writers express themselves with a passionate sense of urgency: calling for a revolt against programmed behavior, exposing the dangers of falling into conformity and \"everydayness,\" and highlighting the importance of embracing one's own subjective experience of existence. These writers want us to deeply consider the nature and nuance of individual agency and free will. Most existential / absurd writers write out of a profound experience, the sort of experience that they believe gives them a brief moment of insight into the human condition. They often use fiction as a vehicle to relay this experience. Our job is to find this fundamental revelation behind the text and try to relate to it. You will often hear me ask, \"What experience does the author reveal to us? How does this connect to existentialism and to your own experiences?\" Students can expect to read the following literary works: No Exit (1944) and The Flies (1943) by Jean-Paul Sartre, Notes from Underground (1865) by Fyodor Dostoevsky, The Stranger (1942) by Albert Camus, Waiting for Godot (1948) by Samuel Beckett, and The Trial (1914-1917) by Franz Kafka. The course will also focus on the main philosophical essays of this discipline along with a few postmodern essays on ideology. Students will be asked to complete a series of response papers that will hopefully culminate into a brief philosophical manifesto. These response papers will be personal in nature and use textual references to propel the essay's central argument. The course is broken up into four main problems: 1) Other People, 2) Free Will and Ethical Action, 3) Ideology and Identity, 4) Nothingness and Happiness, or Absurdism.",
        "name": "Existentialism (Core)",
        "periods": "3, 6",
        "prereqs": "Seniors, did not already take class",
        "teacher": "Mazzurco"
      },
*/