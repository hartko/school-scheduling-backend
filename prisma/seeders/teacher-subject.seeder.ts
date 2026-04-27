import { PrismaClient } from "@prisma/client";

export async function seedTeacherSubjects(prisma: PrismaClient) {
  const assignments: Record<string, string[]> = {
    'TCH-001': ['ENG1', 'ENG2', 'GE-PC'],
    'TCH-002': ['ENG3', 'ENG4', 'HUMSS-CW'],
    'TCH-003': ['FIL1', 'FIL2', 'FIL3', 'FIL4'],
    'TCH-004': ['AP1', 'AP2', 'GE-RPH'],
    'TCH-005': ['AP3', 'AP4', 'GE-TCW', 'HUMSS-PPG'],
    'TCH-006': ['MATH1', 'MATH2', 'ABM-BMATH'],
    'TCH-007': ['MATH3', 'MATH4', 'GE-MMW', 'STEM-PCAL', 'STEM-BCAL'],
    'TCH-008': ['SCI1', 'SCI2', 'STEM-ELS'],
    'TCH-009': ['SCI3', 'STEM-GCHEM1', 'STEM-GCHEM2'],
    'TCH-010': ['SCI4', 'STEM-GPHY1', 'STEM-GPHY2'],
    'TCH-011': ['STEM-GBIO1', 'STEM-GBIO2'],
    'TCH-012': ['TLE', 'TVL-FBS', 'TVL-BPP'],
    'TCH-013': ['MAPEH1', 'MAPEH2', 'MAPEH3', 'MAPEH4'],
    'TCH-014': ['ESP1', 'ESP2', 'ESP3', 'ESP4', 'GE-ETHICS', 'GE-UTS'],
    'TCH-015': ['GE-ARTAPP', 'HUMSS-IWR', 'HUMSS-CE'],
    'TCH-016': ['CS-ICOMP', 'CS-CPROG1', 'CS-CPROG2'],
    'TCH-017': ['CS-DSA', 'CS-OOP', 'CS-DISCMATH'],
    'TCH-018': ['CS-DBMS', 'CS-OS', 'CS-CN'],
    'TCH-019': ['CS-SE', 'CS-WD', 'CS-MAD', 'TVL-CHS'],
    'TCH-020': ['CS-AI', 'CS-CAP1', 'CS-CAP2'],
    'TCH-021': ['ABM-FACCTG', 'ACCTG1', 'ACCTG2'],
    'TCH-022': ['ACCTG-COST', 'ACCTG-MGT', 'ACCTG-AUD', 'ACCTG-TAX'],
    'TCH-023': ['ABM-BF', 'ABM-OM', 'ABM-AECON'],
    'TCH-024': ['BA-BLAW', 'BA-POM', 'BA-MM', 'GE-STS'],
    'TCH-025': ['BA-HRM', 'BA-OM', 'BA-SM'],
    'TCH-026': ['ED-CAD', 'ED-TP', 'ED-CI'],
    'TCH-027': ['ED-ASMT1', 'ED-ASMT2', 'ED-FLCT'],
    'TCH-028': ['ED-FS1', 'ED-FS2', 'ED-PT'],
    'TCH-029': ['GE-RIZAL', 'GE-RPH'],
    'TCH-030': ['NUR-AP', 'NUR-MP', 'NUR-PHARM', 'NUR-MSN1'],
  };

  const teachers = await prisma.teacher.findMany();
  const subjects = await prisma.subject.findMany();
  const teacherMap = new Map(teachers.map((t) => [t.teacher_code, t.id]));
  const subjectMap = new Map(subjects.map((s) => [s.code, s.id]));

  const data: { teacher_id: number; subject_id: number }[] = [];
  for (const [code, subjectCodes] of Object.entries(assignments)) {
    const teacherId = teacherMap.get(code);
    if (!teacherId) continue;
    for (const sc of subjectCodes) {
      const subjectId = subjectMap.get(sc);
      if (!subjectId) continue;
      data.push({ teacher_id: teacherId, subject_id: subjectId });
    }
  }

  await prisma.teacherSubject.createMany({ data, skipDuplicates: true });
  console.log(`  ✔ teacher-subjects: ${data.length} records`);
}
