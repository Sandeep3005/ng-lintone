# ng-lintone
Node cli tool to get lint error associated to only one file for angular 4+.

#### Problem Faced
Issue face that not able to view linting error associated with only one file using ng-lint.

#### Solution provided
Using this package one can easily run command
`lintone file name anyfile.component.ts`
This will display all the linting error to the user for only that particular file.

#### Documentation
**Information about the package**

`lintone -h`
```
lintone [command]
Commands:
  lintone file  file to check for linting
Options:
  -v, --version  Show version number                                  [boolean]
  -h, --help     Show help                                            [boolean]
```

**Information about the file command**

`lintone file -h`
```
lintone file
file to check for linting
Options:
  -v, --version  Show version number                                 [boolean]
  --name, -n     file name like *.component.ts                       [required]
  -h, --help     Show help                                           [boolean]
```

Let me know if you like to add more feature to this package
