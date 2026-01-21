"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Svg,
  Path,
  Image,
} from "@react-pdf/renderer";
import {
  PERSONAL_INFO,
  SUMMARY_SHORT,
  EDUCATION,
  EXPERIENCES,
  PROJECTS,
  CERTIFICATIONS,
  SKILLS,
  LANGUAGES,
  META,
} from "@/constants/data";

// Color palette - Blue theme matching the portfolio
const colors = {
  primary: "#2563EB", // Blue - matches --primary
  primaryLight: "#3B82F6", // Lighter blue
  primaryDark: "#1D4ED8", // Darker blue
  text: "#1F2937", // Dark gray for main text
  textLight: "#4B5563", // Medium gray for secondary text
  textMuted: "#6B7280", // Light gray for tertiary text
  white: "#FFFFFF",
  background: "#F3F4F6", // Light gray for skill tags
  border: "#E5E7EB",
};

// SVG Icon Components
const EmailIcon = () => (
  <Svg width="10" height="10" viewBox="0 0 24 24">
    <Path
      d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
      stroke={colors.white}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

const PhoneIcon = () => (
  <Svg width="10" height="10" viewBox="0 0 24 24">
    <Path
      d="M22 16.92V19.92C22 20.48 21.78 21.01 21.39 21.4C21 21.79 20.47 22 19.92 22C16.87 21.76 13.9 20.79 11.27 19.19C8.82 17.73 6.73 15.64 5.27 13.19C3.67 10.56 2.7 7.59 2.46 4.54C2.46 3.99 2.67 3.46 3.06 3.07C3.45 2.68 3.98 2.46 4.54 2.46H7.54C8.54 2.46 9.4 3.19 9.54 4.18C9.66 5.01 9.87 5.83 10.17 6.61C10.44 7.31 10.27 8.1 9.72 8.62L8.43 9.91C9.79 12.26 11.74 14.21 14.09 15.57L15.38 14.28C15.9 13.73 16.69 13.56 17.39 13.83C18.17 14.13 18.99 14.34 19.82 14.46C20.81 14.6 21.54 15.46 21.54 16.46L22 16.92Z"
      stroke={colors.white}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

const LocationIcon = () => (
  <Svg width="10" height="10" viewBox="0 0 24 24">
    <Path
      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
      fill={colors.white}
    />
  </Svg>
);

const WebIcon = () => (
  <Svg width="10" height="10" viewBox="0 0 24 24">
    <Path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
      fill={colors.white}
    />
  </Svg>
);

const LinkedInIcon = () => (
  <Svg width="10" height="10" viewBox="0 0 24 24">
    <Path
      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.75 8.75C6.92 8.75 6.25 8.08 6.25 7.25C6.25 6.42 6.92 5.75 7.75 5.75C8.58 5.75 9.25 6.42 9.25 7.25C9.25 8.08 8.58 8.75 7.75 8.75ZM18 17H15.5V13.25C15.5 12.17 14.58 11.25 13.5 11.25C12.42 11.25 11.5 12.17 11.5 13.25V17H9V10H11.5V11.12C12.12 10.38 13.12 10 14 10C16.21 10 18 11.79 18 14V17Z"
      fill={colors.white}
    />
  </Svg>
);

const GitHubIcon = () => (
  <Svg width="10" height="10" viewBox="0 0 24 24">
    <Path
      d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z"
      fill={colors.white}
    />
  </Svg>
);

const styles = StyleSheet.create({
  page: {
    fontSize: 10,
    color: colors.text,
    lineHeight: 1.35,
    paddingBottom: 15,
  },
  // Header Section
  header: {
    paddingTop: 18,
    paddingBottom: 14,
    paddingHorizontal: 26,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  headerLeft: {
    flex: 1,
    paddingRight: 14,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 10,
  },
  title: {
    fontSize: 10,
    color: colors.primary,
    marginBottom: 8,
    marginTop: 2,
  },
  summary: {
    fontSize: 9,
    color: colors.textLight,
    lineHeight: 1.45,
    textAlign: "justify",
  },
  // Profile image
  profileImageContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 3,
    borderColor: colors.primary,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  profileImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
    objectFit: "cover",
  },
  // Contact info - 2 rows, 3 items each
  contactGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "33.33%",
    marginBottom: 5,
    paddingRight: 4,
  },
  contactIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
    backgroundColor: colors.primary,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  contactText: {
    fontSize: 8,
    color: colors.textLight,
    lineHeight: 1,
  },
  contactLink: {
    fontSize: 8,
    color: colors.textLight,
    textDecoration: "none",
    lineHeight: 1,
  },
  // Two column layout
  body: {
    flexDirection: "row",
    paddingHorizontal: 26,
    paddingTop: 12,
  },
  leftColumn: {
    width: "50%",
    paddingRight: 10,
  },
  rightColumn: {
    width: "50%",
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: colors.border,
  },
  // Section styling
  section: {
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 4,
    paddingBottom: 2,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.primary,
  },
  // Education
  educationDegree: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.text,
  },
  educationUniversity: {
    fontSize: 9,
    color: colors.textLight,
    marginTop: 1,
  },
  educationMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
  educationDate: {
    fontSize: 8,
    color: colors.primary,
  },
  educationGpa: {
    fontSize: 9,
    fontWeight: "bold",
    color: colors.text,
  },
  // Experience
  experienceItem: {
    marginBottom: 6,
  },
  experienceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.text,
  },
  experienceDate: {
    fontSize: 8,
    color: colors.primary,
  },
  company: {
    fontSize: 9,
    color: colors.textLight,
  },
  experienceLocation: {
    fontSize: 8,
    color: colors.textMuted,
  },
  experienceDetails: {
    marginTop: 2,
  },
  achievementsLabel: {
    fontSize: 8,
    color: colors.textMuted,
    fontStyle: "italic",
    marginBottom: 2,
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bullet: {
    fontSize: 8,
    color: colors.primary,
    marginRight: 4,
  },
  bulletText: {
    fontSize: 8,
    color: colors.textLight,
    flex: 1,
    lineHeight: 1.35,
  },
  // Skills section - inline comma separated
  skillsText: {
    fontSize: 8.5,
    color: colors.text,
    lineHeight: 1.45,
  },
  skillHighlight: {
    color: colors.primary,
  },
  // Projects
  projectItem: {
    marginBottom: 5,
  },
  projectTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: colors.text,
  },
  projectLink: {
    fontSize: 7,
    color: colors.primary,
    textDecoration: "none",
  },
  // Certificates
  certItem: {
    marginBottom: 4,
  },
  certTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: colors.text,
  },
  certDescription: {
    fontSize: 8,
    color: colors.textLight,
    fontStyle: "italic",
  },
  // Languages
  languagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  languageItem: {
    width: "48%",
  },
  languageName: {
    fontSize: 9,
    fontWeight: "bold",
    color: colors.text,
  },
  languageProficiency: {
    fontSize: 8,
    color: colors.textMuted,
    fontStyle: "italic",
  },
});

const ResumePDF = () => (
  <Document
    title={`${PERSONAL_INFO.name} - Resume`}
    author={PERSONAL_INFO.name}
    subject="Professional Resume"
    keywords="Full Stack Developer, Software Engineer, React, Next.js, TypeScript"
  >
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{PERSONAL_INFO.name}</Text>
            <Text style={styles.title}>{PERSONAL_INFO.title}</Text>
            <Text style={styles.summary}>{SUMMARY_SHORT}</Text>
          </View>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              src={`${PERSONAL_INFO.portfolio}${META.profileImage}`}
            />
          </View>
        </View>

        {/* Contact Info Grid - 2 rows, 3 items each */}
        <View style={styles.contactGrid}>
          <View style={styles.contactItem}>
            <View style={styles.contactIcon}>
              <EmailIcon />
            </View>
            <Link
              src={`mailto:${PERSONAL_INFO.email}`}
              style={styles.contactLink}
            >
              {PERSONAL_INFO.email}
            </Link>
          </View>
          <View style={styles.contactItem}>
            <View style={styles.contactIcon}>
              <PhoneIcon />
            </View>
            <Text style={styles.contactText}>{PERSONAL_INFO.phone}</Text>
          </View>
          <View style={styles.contactItem}>
            <View style={styles.contactIcon}>
              <LocationIcon />
            </View>
            <Text style={styles.contactText}>{PERSONAL_INFO.location}</Text>
          </View>
          <View style={styles.contactItem}>
            <View style={styles.contactIcon}>
              <WebIcon />
            </View>
            <Link src={PERSONAL_INFO.portfolio} style={styles.contactLink}>
              abdullahfalak007.vercel.app
            </Link>
          </View>
          <View style={styles.contactItem}>
            <View style={styles.contactIcon}>
              <LinkedInIcon />
            </View>
            <Link src={PERSONAL_INFO.linkedin} style={styles.contactLink}>
              linkedin.com/in/abdullahfalak007
            </Link>
          </View>
          <View style={styles.contactItem}>
            <View style={styles.contactIcon}>
              <GitHubIcon />
            </View>
            <Link src={PERSONAL_INFO.github} style={styles.contactLink}>
              github.com/Abdullahfalak007
            </Link>
          </View>
        </View>
      </View>

      {/* Body - Two Columns */}
      <View style={styles.body}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <View>
              <Text style={styles.educationDegree}>{EDUCATION.degree}</Text>
              <Text style={styles.educationUniversity}>
                {EDUCATION.university}, {EDUCATION.location}
              </Text>
              <View style={styles.educationMeta}>
                <Text style={styles.educationDate}>
                  {EDUCATION.startDate} - {EDUCATION.endDate}
                </Text>
                <Text style={styles.educationGpa}>{EDUCATION.cgpa}</Text>
              </View>
            </View>
          </View>

          {/* Work Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>

            {EXPERIENCES.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.experienceRow}>
                  <Text style={styles.jobTitle}>{exp.title}</Text>
                  <Text style={styles.experienceDate}>{exp.duration}</Text>
                </View>
                <View style={styles.experienceRow}>
                  <Text style={styles.company}>{exp.company}</Text>
                  <Text style={styles.experienceLocation}>{exp.location}</Text>
                </View>
                <View style={styles.experienceDetails}>
                  <Text style={styles.achievementsLabel}>
                    Achievements/Tasks
                  </Text>
                  {exp.highlights.slice(0, 2).map((highlight, hIndex) => (
                    <View key={hIndex} style={styles.bulletItem}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.bulletText}>{highlight}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            <Text style={styles.skillsText}>{SKILLS.join("  •  ")}</Text>
          </View>

          {/* Projects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            {PROJECTS.slice(0, 4).map((project, index) => (
              <View key={index} style={styles.projectItem}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <View style={styles.bulletItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{project.description}</Text>
                </View>
                {project.link && (
                  <Link
                    src={`https://${project.link}`}
                    style={styles.projectLink}
                  >
                    • Live Demo: https://{project.link}
                  </Link>
                )}
              </View>
            ))}
          </View>

          {/* Certificates */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CERTIFICATES</Text>
            {CERTIFICATIONS.slice(0, 4).map((cert, index) => (
              <View key={index} style={styles.certItem}>
                <Text style={styles.certTitle}>{cert.title}</Text>
                <Text style={styles.certDescription}>{cert.issuer}</Text>
              </View>
            ))}
          </View>

          {/* Languages */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>LANGUAGES</Text>
            <View style={styles.languagesContainer}>
              {LANGUAGES.map((lang, index) => (
                <View key={index} style={styles.languageItem}>
                  <Text style={styles.languageName}>{lang.language}</Text>
                  <Text style={styles.languageProficiency}>
                    {lang.proficiency}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
