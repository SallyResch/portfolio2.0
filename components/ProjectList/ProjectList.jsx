import styles from "./ProjectList.module.css";

const ProjectList = ({ title, projects }) => {
  return (
    <div className={styles.projectTile}>
  <h3 className={styles.sectionText}>{title}</h3>
  <div className={styles.projectGrid}>
    {projects.map((project, index) => (
      <a
        key={index}
        className={styles.link}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.url && (
          <iframe
            className={styles.webFrame}
            src={project.url}
            title={project.name}
            scrolling="no"
          ></iframe>
        )}
        <p>{project.name}</p>
      </a>
    ))}
  </div>
</div>
  );
};

export default ProjectList;
