export default [
	{
	  original: `Expected "}" or (single line whitespace) but "\\n" found.`,
	  replacement: `Missing close bracket "}".`
	},
	{
	  original: `Expected "}" or (single line whitespace) but end of input found.`,
	  replacement: `Missing close bracket "}".`
	},
	{
	  original: `Expected "{", (single line whitespace), or Question stem but "\\n" found.`,
	  replacement: `Missing open bracket "{".`
	},
	{
	  original: `Expected (blank line separator), (comment), or Question stem but "{" found.`,
	  replacement: `Missing line break.`
	},
	{
	  original: `Expected "}", (single line whitespace), Essay question { ... }, Single short answer { ... }, {#... }, {= match1 -> Match1\n...}, {=correct choice ~incorrect choice ... }, or {T} or {F} or {True} or {False} but "\\n" found.`,
	  replacement: `Missing question content.`
	},
	{
	  original: `Expected "{", (multiple line whitespace), (single line whitespace), :: Title ::, Category, Description, Question stem, or end of input but ":" found.`,
	  replacement: `Missing title colons "::".`
	},
	{
	  original: `Expected "{", (multiple line whitespace), (single line whitespace), :: Title ::, Category, Description, Question stem, or end of input but "}" found.`,
	  replacement: `Extra closing bracket "}" found.`
	},
	{
	  original: `Expected "{" or (single line whitespace) but "~" found.`,
	  replacement: `Missing open bracket "{".`
	},
	{
	  original: `Expected "{", (single line whitespace), or Question stem but "~" found.`,
	  replacement: `Missing open bracket "{".`
	},
	{
	  original: `Expected "{" or (single line whitespace) but "}" found.`,
	  replacement: `Missing open bracket "{".`
	},
	{
	  original: `Expected "{", (multiple line whitespace), (single line whitespace), :: Title ::, Category, Description, or Question stem but end of input found.`,
	  replacement: `No questions written yet.`
	},
	{
	  original: `Expected "{", (single line whitespace), :: Title ::, or Question stem but end of input found.`,
	  replacement: `No questions written yet.`
	},
	{
	  original: `Expected "}" or (single line whitespace) but ":" found.`,
	  replacement: `Specify a range.`
	},
	{
	  original: `Expected "{" or (single line whitespace) but ":" found.`,
	  replacement: `Specify a category name.`
	},
	{
	  original: `Expected "{", (single line whitespace), or Question stem but end of input found.`,
	  replacement: `Question content required.`
	},
	{
	  original: `Expected "{", (multiple line whitespace), (single line whitespace), :: Title ::, Category, Description, or Question stem but ":" found.`,
	  replacement: `Missing title colons "::".`
	},
	{
	  original: `Expected \"}\", (single line whitespace), Essay question { ... }, Single short answer { ... }, {#... }, {= match1 -> Match1\n...}, {=correct choice ~incorrect choice ... }, or {T} or {F} or {True} or {False} but \"=\" found.`,
	  replacement: `Add a correct answer.`
	},
	{
	  original: `Expected \"}\", (single line whitespace), Essay question { ... }, Single short answer { ... }, {#... }, {= match1 -> Match1\n...}, {=correct choice ~incorrect choice ... }, or {T} or {F} or {True} or {False} but \"~\" found.`,
	  replacement: `Add an incorrect answer.`
	},
	{
	  original: `Expected "}" or (single line whitespace) but "~" found.`,
	  replacement: `Add an incorrect answer.`
	}
  ];
  
  /*
	
	O: Expected "}" or (single line whitespace) but "\n" found.
	N: Closing bracket "}" missing.
	
	O: Expected "{", (single line whitespace), or Question stem but "\n" found.
	N: Opening bracket "{" missing.
	
	O: Expected (blank line separator), (comment), or Question stem but "{" found.
	N: Missing line break.
	
	O: Expected "}", (single line whitespace), Essay question { ... }, Single short answer { ... }, {#... }, {= match1 -> Match1
	...}, {=correct choice ~incorrect choice ... }, or {T} or {F} or {True} or {False} but "\n" found.
	N: Missing a question type.
	
	
	O: Expected "{", (multiple line whitespace), (single line whitespace), :: Title ::, Category, Description, Question stem, or end of input but ":" found.
	N: Missing title colons "::".
	
	
	O: Expected "{", (multiple line whitespace), (single line whitespace), :: Title ::, Category, Description, Question stem, or end of input but "}" found.
	N: Extra closing bracket "}" found.
	
	*/
  