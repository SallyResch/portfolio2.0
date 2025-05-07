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
            <div className={styles.cardContent}>
              <h4 className={styles.projectName}>{project.name}</h4>
              {project.description && (
                <p className={styles.description}>{project.description}</p>
              )}
              <div className={styles.meta}>
                <span className={styles.badge}>{project.projecttype}</span>
                <span>{project.codeLanguage}</span>
                {project.framework && (
                  <span className={styles.framework}>• {project.framework}</span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

