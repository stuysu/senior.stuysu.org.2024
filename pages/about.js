import Head from "next/head";
import Profile from "../components/Profile";
import about from "../styles/About.module.scss";


export default function About() {
  return (
    <>
      <Head>
        <title>About | Junior Caucus</title>
      </Head>

      <h1 className="text-center title">About</h1>

      <div className={about.department}>
        
        <h1>Executives</h1>
        <hr></hr>
        <div className={about.profilesContainer}>

        <Profile
        name="Andrey Sokolov"
        imagePath="/Default_pfp.jpeg"
        facebook="https://www.facebook.com/profile.php?id=100037622327482"
        instagram="FILL HERE"
        github="FILL HERE"
        email="FILL HERE"
        >
        </Profile>

        <Profile
        name="Andrey Sokolov"
        imagePath="/Default_pfp.jpeg"
        facebook="https://www.facebook.com/profile.php?id=100037622327482"
        instagram="FILL HERE"
        github="FILL HERE"
        email="FILL HERE"
        >
        </Profile>
        

        <Profile
        name="Andrey Sokolov"
        imagePath="/Default_pfp.jpeg"
        facebook="https://www.facebook.com/profile.php?id=100037622327482"
        instagram="FILL HERE"
        github="FILL HERE"
        email="FILL HERE"
        >
        </Profile>

        <Profile
        name="Andrey Sokolov"
        imagePath="/Default_pfp.jpeg"
        facebook="https://www.facebook.com/profile.php?id=100037622327482"
        instagram="FILL HERE"
        github="FILL HERE"
        email="FILL HERE"
        >
        </Profile>

        <Profile
        name="Andrey Sokolov"
        imagePath="/Default_pfp.jpeg"
        facebook="https://www.facebook.com/profile.php?id=100037622327482"
        instagram="FILL HERE"
        github="FILL HERE"
        email="FILL HERE"
        >
        </Profile>
        </div>

      </div>



      <div className={about.department}>
        
        <h1>Executives</h1>
        <hr></hr>
        <div className={about.profilesContainer}>


        <Profile
        name="Andrey Sokolov"
        imagePath="/Default_pfp.jpeg"
        facebook="https://www.facebook.com/profile.php?id=100037622327482"
        instagram="FILL HERE"
        github="FILL HERE"
        email="FILL HERE"
        >
        </Profile>
        </div>

      </div>



      <div className={about.department}>
        
        <h1>Executives</h1>
        <hr></hr>
        <div className={about.profilesContainer}>

        <Profile
        name="Andrey Sokolov"
        imagePath="/Default_pfp.jpeg"
        facebook="https://www.facebook.com/profile.php?id=100037622327482"
        instagram="FILL HERE"
        github="FILL HERE"
        email="FILL HERE"
        >
        </Profile>

        <Profile
        name="Andrey Sokolov"
        imagePath="/Default_pfp.jpeg"
        facebook="https://www.facebook.com/profile.php?id=100037622327482"
        instagram="FILL HERE"
        github="FILL HERE"
        email="FILL HERE"
        >
        </Profile>


        </div>

      </div>



      <div className={about.department}>
        
        <h1>Executives</h1>
        <hr></hr>
        <div className={about.profilesContainer}>

        <Profile
        name="Andrey Sokolov"
        imagePath="/Default_pfp.jpeg"
        facebook="https://www.facebook.com/profile.php?id=100037622327482"
        instagram="FILL HERE"
        github="FILL HERE"
        email="FILL HERE"
        >
        </Profile>

        <Profile
        name="Andrey Sokolov"
        imagePath="/Default_pfp.jpeg"
        facebook="https://www.facebook.com/profile.php?id=100037622327482"
        instagram="FILL HERE"
        github="FILL HERE"
        email="FILL HERE"
        >
        </Profile>

        <Profile
        name="Andrey Sokolov"
        imagePath="/Default_pfp.jpeg"
        facebook="https://www.facebook.com/profile.php?id=100037622327482"
        instagram="FILL HERE"
        github="FILL HERE"
        email="FILL HERE"
        >
        </Profile>

        </div>

      </div>
    </>
  );
}
