import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss,
  SiGnubash,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiWebpack,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiApachekafka,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTerraform,
  SiAnsible,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiSplunk,
  SiK6,
  SiSonarqubecloud,
  SiTrivy,
  SiNginx,
  SiProxmox,
  SiCloudflare,
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiDbeaver,
  SiNpm,
  SiPypi,
  SiAnthropic,
  SiGithubcopilot,
  SiTruenas,
  SiNextcloud,
  SiJest,
  SiOpenjdk,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlinePuzzlePiece,
  HiOutlineGlobeAlt,
  HiOutlineCube,
  HiOutlineArrowsRightLeft,
  HiOutlineBolt,
  HiOutlineCircleStack,
  HiOutlineCloud,
  HiOutlineServerStack,
  HiOutlineRocketLaunch,
  HiOutlineWrenchScrewdriver,
  HiOutlineCog6Tooth,
  HiOutlineShieldCheck,
  HiOutlineChartBarSquare,
  HiOutlineBeaker,
  HiOutlineExclamationTriangle,
  HiOutlineHeart,
  HiOutlineEye,
  HiOutlineDocumentText,
  HiOutlineMagnifyingGlass,
  HiOutlineShieldExclamation,
  HiOutlineCommandLine,
  HiOutlineComputerDesktop,
  HiOutlineSignal,
  HiOutlineMap,
  HiOutlineWifi,
  HiOutlineSquare3Stack3D,
  HiOutlineCpuChip,
  HiOutlineBugAnt,
  HiOutlineArrowPath,
  HiOutlineLink,
  HiOutlineTableCells,
  HiOutlineCheckBadge,
  HiOutlineTruck,
  HiOutlineBuildingOffice2,
  HiOutlineArchiveBox,
  HiOutlineClipboardDocumentCheck,
  HiOutlineSparkles,
  HiOutlineHomeModern,
  HiOutlinePhoto,
  HiOutlineServer,
} from "react-icons/hi2";

const iconProps = { className: "skill-brand-icon", "aria-hidden": true };
const genericProps = { className: "skill-generic-icon", "aria-hidden": true };

function DevIcon({ iconClass, style }) {
  return <i className={`${iconClass} colored`} style={style} aria-hidden />;
}

function si(Icon, color) {
  return () => <Icon {...iconProps} style={{ color }} />;
}

function generic(Icon) {
  return (color) => () => (
    <Icon {...genericProps} style={{ color: color || "var(--category-accent, #a1a1aa)" }} />
  );
}

export const SKILL_STYLES = {
  javascript: { color: "#F7DF1E" },
  typescript: { color: "#3178C6" },
  python: { color: "#3776AB" },
  html5: { color: "#E34F26" },
  css3: { color: "#1572B6" },
  bash: { color: "#4EAA25" },
  react: { color: "#61DAFB" },
  nextjs: { color: "#f4f4f5" },
  angular: { color: "#DD0031" },
  redux: { color: "#764ABC" },
  tailwindcss: { color: "#06B6D4" },
  materialui: { color: "#007FFF" },
  webpack: { color: "#8DD6F9" },
  vite: { color: "#646CFF" },
  nodejs: { color: "#339933" },
  express: { color: "#f4f4f5" },
  fastapi: { color: "#009688" },
  kafka: { color: "#f4f4f5" },
  postgresql: { color: "#4169E1" },
  mysql: { color: "#4479A1" },
  mongodb: { color: "#47A248" },
  cassandra: { color: "#1287B1" },
  db2: { color: "#052FAD" },
  dynamodb: { color: "#FF9900" },
  bigquery: { color: "#4285F4" },
  "google-datastore": { color: "#4285F4" },
  aws: { color: "#FF9900" },
  gcp: { color: "#4285F4" },
  "amazon-ecs": { color: "#FF9900" },
  "amazon-vpc": { color: "#FF9900" },
  "amazon-rds": { color: "#FF9900" },
  "aws-lambda": { color: "#FF9900" },
  "google-dataflow": { color: "#4285F4" },
  jenkins: { color: "#D24939" },
  "github-actions": { color: "#2088FF" },
  terraform: { color: "#844FBA" },
  ansible: { color: "#EE0000" },
  cloudformation: { color: "#FF9900" },
  docker: { color: "#2496ED" },
  "docker-compose": { color: "#2496ED" },
  kubernetes: { color: "#326CE5" },
  prometheus: { color: "#E6522C" },
  grafana: { color: "#F46800" },
  splunk: { color: "#65A637" },
  k6: { color: "#7D64FF" },
  sonarqube: { color: "#4E9BCD" },
  trivy: { color: "#1904DA" },
  nginx: { color: "#009639" },
  proxmox: { color: "#E57000" },
  "cloudflare-tunnel": { color: "#F38020" },
  git: { color: "#F05032" },
  github: { color: "#f4f4f5" },
  vscode: { color: "#007ACC" },
  intellij: { color: "#FE315D" },
  dbeaver: { color: "#382E2E" },
  npm: { color: "#CB3837" },
  pip: { color: "#3776AB" },
  claude: { color: "#D97757" },
  "claude-code": { color: "#D97757" },
  "github-copilot": { color: "#f4f4f5" },
  truenas: { color: "#0095D5" },
  nextcloud: { color: "#0082C9" },
  jest: { color: "#C21325" },
  "java-21": { color: "#ED8B00" },
};

const ICON_MAP = {
  javascript: si(SiJavascript, "#F7DF1E"),
  typescript: si(SiTypescript, "#3178C6"),
  python: si(SiPython, "#3776AB"),
  html5: si(SiHtml5, "#E34F26"),
  css3: si(SiCss, "#1572B6"),
  bash: si(SiGnubash, "#4EAA25"),
  react: si(SiReact, "#61DAFB"),
  nextjs: si(SiNextdotjs, "#f4f4f5"),
  angular: si(SiAngular, "#DD0031"),
  redux: si(SiRedux, "#764ABC"),
  tailwindcss: si(SiTailwindcss, "#06B6D4"),
  materialui: si(SiMui, "#007FFF"),
  webpack: si(SiWebpack, "#8DD6F9"),
  vite: si(SiVite, "#646CFF"),
  nodejs: si(SiNodedotjs, "#339933"),
  express: si(SiExpress, "#f4f4f5"),
  fastapi: si(SiFastapi, "#009688"),
  kafka: si(SiApachekafka, "#f4f4f5"),
  postgresql: si(SiPostgresql, "#4169E1"),
  mysql: si(SiMysql, "#4479A1"),
  mongodb: si(SiMongodb, "#47A248"),
  cassandra: () => (
    <DevIcon iconClass="devicon-cassandra-plain" style={{ fontSize: "3.25rem" }} />
  ),
  db2: () => (
    <DevIcon iconClass="devicon-db2-plain" style={{ fontSize: "3.25rem" }} />
  ),
  dynamodb: () => (
    <DevIcon
      iconClass="devicon-amazonwebservices-plain-wordmark"
      style={{ fontSize: "2.5rem" }}
    />
  ),
  bigquery: () => (
    <DevIcon iconClass="devicon-googlecloud-plain" style={{ fontSize: "3.25rem" }} />
  ),
  "google-datastore": () => (
    <DevIcon iconClass="devicon-googlecloud-plain" style={{ fontSize: "3.25rem" }} />
  ),
  aws: () => (
    <DevIcon
      iconClass="devicon-amazonwebservices-plain-wordmark"
      style={{ fontSize: "2.5rem" }}
    />
  ),
  gcp: () => (
    <DevIcon iconClass="devicon-googlecloud-plain" style={{ fontSize: "3.25rem" }} />
  ),
  "amazon-ecs": () => (
    <DevIcon
      iconClass="devicon-amazonwebservices-plain-wordmark"
      style={{ fontSize: "2.5rem" }}
    />
  ),
  "amazon-vpc": () => (
    <DevIcon
      iconClass="devicon-amazonwebservices-plain-wordmark"
      style={{ fontSize: "2.5rem" }}
    />
  ),
  "amazon-rds": () => (
    <DevIcon
      iconClass="devicon-amazonwebservices-plain-wordmark"
      style={{ fontSize: "2.5rem" }}
    />
  ),
  "aws-lambda": () => (
    <DevIcon
      iconClass="devicon-amazonwebservices-plain-wordmark"
      style={{ fontSize: "2.5rem" }}
    />
  ),
  "google-dataflow": () => (
    <DevIcon iconClass="devicon-googlecloud-plain" style={{ fontSize: "3.25rem" }} />
  ),
  jenkins: si(SiJenkins, "#D24939"),
  "github-actions": si(SiGithubactions, "#2088FF"),
  terraform: si(SiTerraform, "#844FBA"),
  ansible: si(SiAnsible, "#EE0000"),
  cloudformation: () => (
    <DevIcon
      iconClass="devicon-amazonwebservices-plain-wordmark"
      style={{ fontSize: "2.5rem" }}
    />
  ),
  docker: si(SiDocker, "#2496ED"),
  "docker-compose": si(SiDocker, "#2496ED"),
  kubernetes: si(SiKubernetes, "#326CE5"),
  prometheus: si(SiPrometheus, "#E6522C"),
  grafana: si(SiGrafana, "#F46800"),
  splunk: si(SiSplunk, "#65A637"),
  k6: si(SiK6, "#7D64FF"),
  sonarqube: si(SiSonarqubecloud, "#4E9BCD"),
  trivy: si(SiTrivy, "#1904DA"),
  nginx: si(SiNginx, "#009639"),
  proxmox: si(SiProxmox, "#E57000"),
  "cloudflare-tunnel": si(SiCloudflare, "#F38020"),
  git: si(SiGit, "#F05032"),
  github: si(SiGithub, "#f4f4f5"),
  vscode: si(VscVscode, "#007ACC"),
  intellij: si(SiIntellijidea, "#FE315D"),
  dbeaver: si(SiDbeaver, "#382E2E"),
  npm: si(SiNpm, "#CB3837"),
  pip: si(SiPypi, "#3776AB"),
  claude: si(SiAnthropic, "#D97757"),
  "claude-code": si(SiAnthropic, "#D97757"),
  "github-copilot": si(SiGithubcopilot, "#f4f4f5"),
  truenas: si(SiTruenas, "#0095D5"),
  nextcloud: si(SiNextcloud, "#0082C9"),
  jest: si(SiJest, "#C21325"),
  "java-21": si(SiOpenjdk, "#ED8B00"),
  "shell-scripting": si(SiGnubash, "#4EAA25"),
  "linux-admin": () => (
    <DevIcon iconClass="devicon-linux-plain" style={{ fontSize: "3.25rem" }} />
  ),
  "terraform-modules": si(SiTerraform, "#844FBA"),
};

const GENERIC = {
  design: generic(HiOutlineDevicePhoneMobile),
  hooks: generic(HiOutlinePuzzlePiece),
  api: generic(HiOutlineGlobeAlt),
  services: generic(HiOutlineCube),
  integration: generic(HiOutlineArrowsRightLeft),
  async: generic(HiOutlineBolt),
  database: generic(HiOutlineCircleStack),
  cloud: generic(HiOutlineCloud),
  cicd: generic(HiOutlineRocketLaunch),
  automation: generic(HiOutlineCog6Tooth),
  iac: generic(HiOutlineServerStack),
  containers: generic(HiOutlineCube),
  sre: generic(HiOutlineChartBarSquare),
  chaos: generic(HiOutlineExclamationTriangle),
  health: generic(HiOutlineHeart),
  monitor: generic(HiOutlineEye),
  logs: generic(HiOutlineDocumentText),
  incident: generic(HiOutlineMagnifyingGlass),
  security: generic(HiOutlineShieldCheck),
  scan: generic(HiOutlineShieldExclamation),
  linux: generic(HiOutlineCommandLine),
  vm: generic(HiOutlineComputerDesktop),
  network: generic(HiOutlineWifi),
  dns: generic(HiOutlineMap),
  architecture: generic(HiOutlineSquare3Stack3D),
  systems: generic(HiOutlineCpuChip),
  debug: generic(HiOutlineBugAnt),
  performance: generic(HiOutlineBolt),
  migration: generic(HiOutlineArrowPath),
  enterprise: generic(HiOutlineBuildingOffice2),
  catalog: generic(HiOutlineArchiveBox),
  validation: generic(HiOutlineClipboardDocumentCheck),
  testing: generic(HiOutlineBeaker),
  ai: generic(HiOutlineSparkles),
  homelab: generic(HiOutlineHomeModern),
  photo: generic(HiOutlinePhoto),
  server: generic(HiOutlineServer),
  wrench: generic(HiOutlineWrenchScrewdriver),
  data: generic(HiOutlineTableCells),
  support: generic(HiOutlineTruck),
  link: generic(HiOutlineLink),
  check: generic(HiOutlineCheckBadge),
  signal: generic(HiOutlineSignal),
};

const GENERIC_IDS = {
  "responsive-web-design": "design",
  "react-hooks": "hooks",
  "rest-api": "api",
  microservices: "services",
  "api-integration": "integration",
  "async-programming": "async",
  k3s: "containers",
  containerization: "containers",
  "container-orchestration": "containers",
  sre: "sre",
  openobserve: "monitor",
  "chaos-testing": "chaos",
  "health-check-automation": "health",
  monitoring: "monitor",
  logging: "logs",
  "production-troubleshooting": "wrench",
  "incident-investigation": "incident",
  "reliability-engineering": "sre",
  "static-code-analysis": "scan",
  "container-vuln-scanning": "scan",
  "cicd-security": "security",
  virtualization: "vm",
  dns: "dns",
  "networking-fundamentals": "network",
  "docker-networking": "network",
  "server-admin": "server",
  fullstack: "architecture",
  "software-architecture": "architecture",
  "system-design": "systems",
  "distributed-systems": "systems",
  "microservices-architecture": "services",
  "api-design": "api",
  debugging: "debug",
  "performance-optimization": "performance",
  "application-integration": "integration",
  "data-reconciliation": "data",
  "data-integrity": "data",
  "system-migration": "migration",
  "production-support": "support",
  "catalog-systems": "catalog",
  "catalog-migration": "migration",
  "legacy-retirement": "migration",
  "consumer-migration": "migration",
  "attribute-mapping": "data",
  "data-reconciliation-enterprise": "data",
  "service-onboarding": "link",
  "repository-onboarding": "link",
  "production-readiness": "check",
  "enterprise-app-support": "enterprise",
  "performance-testing": "testing",
  "api-testing": "testing",
  "unit-testing": "testing",
  "integration-testing": "testing",
  "application-validation": "validation",
  "deployment-validation": "validation",
  tableplus: "database",
  localstack: "cloud",
  "ai-assisted-dev": "ai",
  "ai-debugging": "ai",
  "ai-refactoring": "ai",
  "ai-repo-analysis": "ai",
  "ai-automation": "ai",
  "ai-infra-dev": "ai",
  photoprism: "photo",
  "virtual-machines": "vm",
  "self-hosted-services": "homelab",
  "homelab-infra": "homelab",
  "cicd-pipelines": "cicd",
  "pipeline-automation": "automation",
  "build-automation": "automation",
  "deployment-automation": "automation",
  "infrastructure-automation": "automation",
  "terraform-modules": "iac",
  "infrastructure-provisioning": "iac",
  "environment-management": "iac",
};

export function getSkillColor(id, fallback) {
  return SKILL_STYLES[id]?.color || fallback;
}

export function SkillIcon({ id, fallbackColor = "#a1a1aa" }) {
  const branded = ICON_MAP[id];
  if (branded) return branded();

  const genKey = GENERIC_IDS[id] || "architecture";
  const render = GENERIC[genKey] || GENERIC.architecture;
  return render(fallbackColor)();
}