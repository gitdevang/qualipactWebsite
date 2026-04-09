const EXTERNAL_DATA_URL = 'https://qualipact.com';

function generateSiteMap(caseStudies) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/case-study</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/about</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/contact</loc>
     </url>
     ${caseStudies
       .map((id) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/case-study/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps handles the heavy lifting
}

export async function getServerSideProps({ res }) {
  // Yahan tum apne case studies ki list define kar sakte ho
  const allCaseStudies = ['real-estate', 'school-management'];

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(allCaseStudies);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;