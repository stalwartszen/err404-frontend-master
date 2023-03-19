import React, { useContext, createContext } from 'react'
import { useAddress, useContract, useMetamask, useContractWrite, useDisconnect } from '@thirdweb-dev/react'

import { ethers } from 'ethers'

const StateContext = createContext()

export const StateProvider = ({ children }) => {
    const { contract } = useContract('0x6b6462B7026bDd9DaC5D05c3F8101CD189981092', [
        {
            "type": "function",
            "name": "addDoctorToPatient",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_patientId",
                    "internalType": "uint256"
                },
                {
                    "type": "uint256",
                    "name": "_doctorId",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": "",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addDoctorToRecord",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_recordId",
                    "internalType": "uint256"
                },
                {
                    "type": "uint256",
                    "name": "_doctorId",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": "",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "consentCount",
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "consents",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "id",
                    "internalType": "uint256"
                },
                {
                    "type": "uint256",
                    "name": "patientId",
                    "internalType": "uint256"
                },
                {
                    "type": "uint256",
                    "name": "doctorId",
                    "internalType": "uint256"
                },
                {
                    "type": "string",
                    "name": "description",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "alttreatments",
                    "internalType": "string"
                },
                {
                    "type": "bool",
                    "name": "dconsent",
                    "internalType": "bool"
                },
                {
                    "type": "bool",
                    "name": "pconsent",
                    "internalType": "bool"
                },
                {
                    "type": "string",
                    "name": "date",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "createConsent",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_patientid",
                    "internalType": "uint256"
                },
                {
                    "type": "uint256",
                    "name": "_doctorid",
                    "internalType": "uint256"
                },
                {
                    "type": "string",
                    "name": "_description",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "_alttreatments",
                    "internalType": "string"
                },
                {
                    "type": "bool",
                    "name": "_dconsent",
                    "internalType": "bool"
                },
                {
                    "type": "bool",
                    "name": "_pconsent",
                    "internalType": "bool"
                },
                {
                    "type": "string",
                    "name": "_date",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createDoctor",
            "inputs": [
                {
                    "type": "address",
                    "name": "_doctor",
                    "internalType": "address"
                },
                {
                    "type": "string",
                    "name": "_name",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "_email",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "_phone",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createPatient",
            "inputs": [
                {
                    "type": "address",
                    "name": "_patient",
                    "internalType": "address"
                },
                {
                    "type": "string",
                    "name": "_name",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "_email",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "_phone",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "createRecord",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_patientId",
                    "internalType": "uint256"
                },
                {
                    "type": "uint256",
                    "name": "_doctorId",
                    "internalType": "uint256"
                },
                {
                    "type": "string",
                    "name": "_ipfs",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "_date",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "_description",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "_category",
                    "internalType": "string"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "doctorCount",
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "doctors",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "id",
                    "internalType": "uint256"
                },
                {
                    "type": "address",
                    "name": "doctor",
                    "internalType": "address"
                },
                {
                    "type": "string",
                    "name": "name",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "email",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "phone",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getAllConsentOfDoctor",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_doctorid",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "tuple[]",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "uint256",
                            "name": "patientId",
                            "internalType": "uint256"
                        },
                        {
                            "type": "uint256",
                            "name": "doctorId",
                            "internalType": "uint256"
                        },
                        {
                            "type": "string",
                            "name": "description",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "alttreatments",
                            "internalType": "string"
                        },
                        {
                            "type": "bool",
                            "name": "dconsent",
                            "internalType": "bool"
                        },
                        {
                            "type": "bool",
                            "name": "pconsent",
                            "internalType": "bool"
                        },
                        {
                            "type": "string",
                            "name": "date",
                            "internalType": "string"
                        }
                    ],
                    "internalType": "struct HealthRecord.Consent[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getAllConsentOfPatient",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_patientid",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "tuple[]",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "uint256",
                            "name": "patientId",
                            "internalType": "uint256"
                        },
                        {
                            "type": "uint256",
                            "name": "doctorId",
                            "internalType": "uint256"
                        },
                        {
                            "type": "string",
                            "name": "description",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "alttreatments",
                            "internalType": "string"
                        },
                        {
                            "type": "bool",
                            "name": "dconsent",
                            "internalType": "bool"
                        },
                        {
                            "type": "bool",
                            "name": "pconsent",
                            "internalType": "bool"
                        },
                        {
                            "type": "string",
                            "name": "date",
                            "internalType": "string"
                        }
                    ],
                    "internalType": "struct HealthRecord.Consent[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getAllDoctors",
            "inputs": [],
            "outputs": [
                {
                    "type": "tuple[]",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "address",
                            "name": "doctor",
                            "internalType": "address"
                        },
                        {
                            "type": "string",
                            "name": "name",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "email",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "phone",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256[]",
                            "name": "patients",
                            "internalType": "uint256[]"
                        }
                    ],
                    "internalType": "struct HealthRecord.Doctor[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getAllPatients",
            "inputs": [],
            "outputs": [
                {
                    "type": "tuple[]",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "address",
                            "name": "patient",
                            "internalType": "address"
                        },
                        {
                            "type": "string",
                            "name": "name",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "email",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "phone",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256[]",
                            "name": "consents",
                            "internalType": "uint256[]"
                        },
                        {
                            "type": "uint256[]",
                            "name": "reports",
                            "internalType": "uint256[]"
                        },
                        {
                            "type": "uint256[]",
                            "name": "doctors",
                            "internalType": "uint256[]"
                        }
                    ],
                    "internalType": "struct HealthRecord.Patients[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getConsent",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_consentid",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "tuple",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "uint256",
                            "name": "patientId",
                            "internalType": "uint256"
                        },
                        {
                            "type": "uint256",
                            "name": "doctorId",
                            "internalType": "uint256"
                        },
                        {
                            "type": "string",
                            "name": "description",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "alttreatments",
                            "internalType": "string"
                        },
                        {
                            "type": "bool",
                            "name": "dconsent",
                            "internalType": "bool"
                        },
                        {
                            "type": "bool",
                            "name": "pconsent",
                            "internalType": "bool"
                        },
                        {
                            "type": "string",
                            "name": "date",
                            "internalType": "string"
                        }
                    ],
                    "internalType": "struct HealthRecord.Consent"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getDoctor",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_doctorid",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "tuple",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "address",
                            "name": "doctor",
                            "internalType": "address"
                        },
                        {
                            "type": "string",
                            "name": "name",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "email",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "phone",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256[]",
                            "name": "patients",
                            "internalType": "uint256[]"
                        }
                    ],
                    "internalType": "struct HealthRecord.Doctor"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getDoctorByAddress",
            "inputs": [
                {
                    "type": "address",
                    "name": "_doctor",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "type": "tuple",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "address",
                            "name": "doctor",
                            "internalType": "address"
                        },
                        {
                            "type": "string",
                            "name": "name",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "email",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "phone",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256[]",
                            "name": "patients",
                            "internalType": "uint256[]"
                        }
                    ],
                    "internalType": "struct HealthRecord.Doctor"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getDoctorsOfPatient",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_patientId",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "tuple[]",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "address",
                            "name": "doctor",
                            "internalType": "address"
                        },
                        {
                            "type": "string",
                            "name": "name",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "email",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "phone",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256[]",
                            "name": "patients",
                            "internalType": "uint256[]"
                        }
                    ],
                    "internalType": "struct HealthRecord.Doctor[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPatient",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_patientid",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "tuple",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "address",
                            "name": "patient",
                            "internalType": "address"
                        },
                        {
                            "type": "string",
                            "name": "name",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "email",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "phone",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256[]",
                            "name": "consents",
                            "internalType": "uint256[]"
                        },
                        {
                            "type": "uint256[]",
                            "name": "reports",
                            "internalType": "uint256[]"
                        },
                        {
                            "type": "uint256[]",
                            "name": "doctors",
                            "internalType": "uint256[]"
                        }
                    ],
                    "internalType": "struct HealthRecord.Patients"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPatientByAddress",
            "inputs": [
                {
                    "type": "address",
                    "name": "_patient",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "type": "tuple",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "address",
                            "name": "patient",
                            "internalType": "address"
                        },
                        {
                            "type": "string",
                            "name": "name",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "email",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "phone",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256[]",
                            "name": "consents",
                            "internalType": "uint256[]"
                        },
                        {
                            "type": "uint256[]",
                            "name": "reports",
                            "internalType": "uint256[]"
                        },
                        {
                            "type": "uint256[]",
                            "name": "doctors",
                            "internalType": "uint256[]"
                        }
                    ],
                    "internalType": "struct HealthRecord.Patients"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPatientsOfDoctor",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_doctorId",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "tuple[]",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "address",
                            "name": "patient",
                            "internalType": "address"
                        },
                        {
                            "type": "string",
                            "name": "name",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "email",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "phone",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256[]",
                            "name": "consents",
                            "internalType": "uint256[]"
                        },
                        {
                            "type": "uint256[]",
                            "name": "reports",
                            "internalType": "uint256[]"
                        },
                        {
                            "type": "uint256[]",
                            "name": "doctors",
                            "internalType": "uint256[]"
                        }
                    ],
                    "internalType": "struct HealthRecord.Patients[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRecord",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_recordid",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "tuple",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "uint256",
                            "name": "patientId",
                            "internalType": "uint256"
                        },
                        {
                            "type": "string",
                            "name": "ipfs",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "description",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "category",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "date",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256[]",
                            "name": "doctors",
                            "internalType": "uint256[]"
                        }
                    ],
                    "internalType": "struct HealthRecord.Record"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRecordsOfDoctor",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_doctorId",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "tuple[]",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "uint256",
                            "name": "patientId",
                            "internalType": "uint256"
                        },
                        {
                            "type": "string",
                            "name": "ipfs",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "description",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "category",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "date",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256[]",
                            "name": "doctors",
                            "internalType": "uint256[]"
                        }
                    ],
                    "internalType": "struct HealthRecord.Record[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getReportOfPatient",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_patientId",
                    "internalType": "uint256"
                },
                {
                    "type": "uint256",
                    "name": "_doctorId",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "tuple[]",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "uint256",
                            "name": "patientId",
                            "internalType": "uint256"
                        },
                        {
                            "type": "string",
                            "name": "ipfs",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "description",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "category",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "date",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256[]",
                            "name": "doctors",
                            "internalType": "uint256[]"
                        }
                    ],
                    "internalType": "struct HealthRecord.Record[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getReportsOfPatient",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_patientId",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "tuple[]",
                    "name": "",
                    "components": [
                        {
                            "type": "uint256",
                            "name": "id",
                            "internalType": "uint256"
                        },
                        {
                            "type": "uint256",
                            "name": "patientId",
                            "internalType": "uint256"
                        },
                        {
                            "type": "string",
                            "name": "ipfs",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "description",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "category",
                            "internalType": "string"
                        },
                        {
                            "type": "string",
                            "name": "date",
                            "internalType": "string"
                        },
                        {
                            "type": "uint256[]",
                            "name": "doctors",
                            "internalType": "uint256[]"
                        }
                    ],
                    "internalType": "struct HealthRecord.Record[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "patientCount",
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "patients",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "id",
                    "internalType": "uint256"
                },
                {
                    "type": "address",
                    "name": "patient",
                    "internalType": "address"
                },
                {
                    "type": "string",
                    "name": "name",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "email",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "phone",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "recordCount",
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "records",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "id",
                    "internalType": "uint256"
                },
                {
                    "type": "uint256",
                    "name": "patientId",
                    "internalType": "uint256"
                },
                {
                    "type": "string",
                    "name": "ipfs",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "description",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "category",
                    "internalType": "string"
                },
                {
                    "type": "string",
                    "name": "date",
                    "internalType": "string"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "relativeCount",
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        }
    ])

    const { mutateAsync: createPatient } = useContractWrite(contract, 'createPatient');
    const { mutateAsync: createDoctor } = useContractWrite(contract, 'createDoctor');
    const { mutateAsync: createRecord } = useContractWrite(contract, 'createRecord');
    const { mutateAsync: createConsent } = useContractWrite(contract, 'createConsent');



    const address = useAddress();
    const connect = useMetamask();
    
    // disconnect from metamask
    const disconnect = useDisconnect();


    const RegisterPatients = async (form) => {
        try {
            const data = await createPatient([
                address,
                form.name,
                form.email,
                form.phone
            ])

            console.log("contract call success", data)
            return { success: true }
        } catch (error) {
            console.log("contract call failure", error)
            return { success: false }
        }
    }

    const RegisterDoctors = async (form) => {
        try {
            const data = await createDoctor([
                address,
                form.name,
                form.email,
                form.phone
            ])

            console.log("contract call success", data)
            return { success: true,data:data }
        } catch (err) {
            console.log("contract call failure", err)
            return { success: false }
        }
    }

    const RegisterRecords = async (form) => {
        try {
            const data = await createRecord([
                form.patientId,
                form.doctorId,
                form.ipfs,
                form.date,
                form.description,
                form.category
            ])

            console.log("contract call success", data)
            return { success: true }
        } catch (err) {
            console.log("contract call failure", err)
            return { success: false }
        }
    }


    const getAllDoctors = async () => {
        try {
            const result = await contract.call("getAllDoctors")

            const parsedDoctors = result.map((doctor, i) => ({
                id: ethers.utils.formatEther(doctor.id.toString()),
                name: doctor.name,
                address: doctor.doctor,
                email: doctor.email,
                phone: doctor.phone,
            }

            ))

            console.log(parsedDoctors)

            return parsedDoctors
        } catch (err) {
            console.log(err)
        }
    }


    const getAllPatients = async () => {
        try {
            const result = await contract.call("getAllPatients")

            const parsedPatients = result.map((patient, i) => ({
                id: ethers.utils.formatEther(patient.id.toString()),
                name: patient.name,
                email: patient.email,
                phone: patient.phone,
                address: patient.patient
            }

            ))

            console.log(parsedPatients)

            return parsedPatients
        } catch (err) {
            console.log(err)
            return { success: false }
        }
    }

    const getReportsOfPatient = async (id) => {
        try {
            const result = await contract.call("getReportsOfPatient", id)
            console.log(result)
            const parsedReports = result.map((report, i) => ({
                id: ethers.utils.formatEther(report.id.toString()),
                patientid: ethers.utils.formatEther(report.patientId.toString()),
                ipfs: report.ipfs,
                date: report.date,
                description: report.description,
                category: report.category,
                doctors: report.doctors

            }))
            console.log(parsedReports)
            return parsedReports

        }
        catch (err) {

            console.log(err)

            return { success: false }
        }

    }


    const getPatientsOfDoctor = async (id) => {
        try {
            const result = await contract.call("getPatientsOfDoctor", id)

            const parsedPatients = result.map((patient, i) => ({
                id: ethers.utils.formatEther(patient.id.toString()),
                name: patient.name,
                email: patient.email,
                phone: patient.phone,
                address: patient.patient
            }

            ))

            console.log(parsedPatients)

            return parsedPatients
        } catch (err) {
            console.log(err)
            return { success: false }
        }
    }

    const getReportOfPatient = async (patientid, doctorid) => {
        try {
            const result = await contract.call("getReportOfPatient", patientid, doctorid)

            const parsedReports = result.map((report, i) => ({
                id: ethers.utils.formatEther(report.id.toString()),
                patientid: ethers.utils.formatEther(report.patientId.toString()),
                ipfs: report.ipfs,
                date: report.date,
                description: report.description,
                category: report.category,
                doctors: report.doctors

            }))
            console.log(parsedReports)
            return parsedReports

        }
        catch (err) {

            console.log(err)

            return { success: false }
        }

    }

    const getDoctorsOfPatient = async (id) => {
        try {
            const result = await contract.call("getDoctorsOfPatient", id)

            const parsedDoctors = result.map((doctor, i) => ({

                id: ethers.utils.formatEther(doctor.id.toString()),
                name: doctor.name,
                email: doctor.email,
                phone: doctor.phone,
                address: doctor.doctor

            }

            ))

            console.log(parsedDoctors)

            return parsedDoctors
        } catch (err) {
            console.log(err)
            return { success: false }
        }
    }


    const getAllPatient = async () => {
        try {
            const result = await contract.call("getAllPatients")

            const parsedPatients = result.map((patient, i) => ({
                id: ethers.utils.formatEther(patient.id.toString()),
                name: patient.name,
                email: patient.email,
                phone: patient.phone,
                address: patient.patient

            }))

            console.log(parsedPatients)
            return parsedPatients;


        } catch (err) {
            console.log(err)
            return {
                error: true,
                message: "Network Error : 500"
            }
        }

    }


    const getPatientByAddress = async (address) => {
        try {
            const result = await contract.call("getPatientByAddress", address)

            const parsedPatient = {
                id: ethers.utils.formatEther(result.id.toString()),
                name: result.name,
                email: result.email,
                phone: result.phone,
                address: result.patient
            }

            console.log(parsedPatient)
            return parsedPatient;

        }
        catch (err) {
            console.log(err)
            return {
                error: true,
                message: "Network Error : 500"
            }

        }
    }

    const getDoctorByAddress = async (address) => {
        try {
            const result = await contract.call("getDoctorByAddress", address)

            const parsedDoctor = {
                id: ethers.utils.formatEther(result.id.toString()),
                name: result.name,
                email: result.email,
                phone: result.phone,
                address: result.doctor
            }

            console.log(parsedDoctor)

            return parsedDoctor;

        }
        catch (err) {
            console.log(err)
            return {
                success: false,
                error: true,
                message: "Network Error : 500"
            }

        }
    }

    const addDoctorToPatient = async (patientid, doctorid) => {
        try {
            const result = await contract.call("addDoctorToPatient", patientid, doctorid)

            console.log(result)

            return result;

        }
        catch (err) {
            console.log(err)

            return {
                success: false,
                error: true,
                message: "Network Error : 500"
            }

        }
    }

    const addDoctorToRecord = async (recordid, doctorid) => {
        try {
            const result = await contract.call("addDoctorToRecord", recordid, doctorid)

            console.log(result)

            return {
                success: true,
                error: false,
                message: "Doctor added to record"
            }

        }
        catch (err) {
            console.log(err)

            return {
                success: false,
                error: true,
                message: "Network Error : 500"
            }

        }
    }

    const getRecordsOfDoctor = async (doctorid) => {
        try {
            const result = await contract.call("getRecordsOfDoctor", doctorid)

            const parsedRecords = result.map((record, i) => ({
                id: ethers.utils.formatEther(record.id.toString()),
                patientid: ethers.utils.formatEther(record.patientId.toString()),
                ipfs: record.ipfs,
                date: record.date,
                description: record.description,
                category: record.category,
                doctors: record.doctors

            }))

            console.log(parsedRecords)

            return parsedRecords;

        }
        catch (err) {
            console.log(err)

            return {
                success: false,
                error: true,
                message: "Network Error : 500"
            }

        }
    }

    const RegisterConsent = async (form) => {
        try {
            const result = await createConsent([
                form.patientid,
                form.doctorid,
                form.description,
                form.alttreatments,
                form.boold,
                form.boolp,
                form.date
            ])

            console.log(result)

            return {
                success: true,
                error: false,
                message: "Consent Registered"
            }

        }
        catch (err) {
            console.log(err)

            return {
                success: false,
                error: true,
                message: "Network Error : 500"
            }

        }

    }

    const getAllConsentOfPatient = async (id) => {
        try {
            const result = await contract.call("getAllConsentOfPatient", id)

            const parsedConsent = result.map((consent, i) => ({
                id: ethers.utils.formatEther(consent.id.toString()),
                patientid: ethers.utils.formatEther(consent.patientId.toString()),
                doctorid: ethers.utils.formatEther(consent.doctorId.toString()),
                description: consent.description,
                alttreatments: consent.alttreatments,
                boold: consent.dconsent,
                boolp: consent.pconsent,
                date: consent.date

            }))

            console.log(parsedConsent)

            return parsedConsent;

        }
        catch (err) {
            console.log(err)

            return {
                success: false,
                error: true,
                message: "Network Error : 500"
            }

        }
    }

    const getAllConsentOfDoctor = async (id) => {
        try {
            const result = await contract.call("getAllConsentOfDoctor", id)

            const parsedConsent = result.map((consent, i) => ({
                id: ethers.utils.formatEther(consent.id.toString()),
                patientid: ethers.utils.formatEther(consent.patientId.toString()),
                doctorid: ethers.utils.formatEther(consent.doctorId.toString()),
                description: consent.description,
                alttreatments: consent.alttreatments,
                boold: consent.dconsent,
                boolp: consent.pconsent,
                date: consent.date

            }))

            console.log(parsedConsent)

            return parsedConsent;

        }
        catch (err) {
            console.log(err)

            return {
                success: false,
                error: true,
                message: "Network Error : 500"
            }

        }
    }


    const getConsent = async (id) => {
        try {
            const result = await contract.call("getConsent", id)

            const parsedConsent = {
                id: ethers.utils.formatEther(result.id.toString()),
                patientid: ethers.utils.formatEther(result.patientId.toString()),
                doctorid: ethers.utils.formatEther(result.doctorId.toString()),
                description: result.description,
                alttreatments: result.alttreatments,
                boold: result.dconsent,
                boolp: result.pconsent,
                date: result.date

            }

            return parsedConsent;

        }
        catch (err) {
            console.log(err)

            return {
                success: false,
                error: true,
                message: "Network Error : 500"
            }

        }

    }

    const getPatient = async (id) => {
        try {
            const result = await contract.call("getPatient", id)

            const parsedPatient = {
                id: ethers.utils.formatEther(result.id.toString()),
                name: result.name,
                phone: result.phone,
                email: result.email,
                address: result.address,
                doctors: result.doctors,
                records: result.records,
                consent: result.consent
            }

            return parsedPatient;

        }
        catch (err) {
            console.log(err)

            return {
                success: false,
                error: true,
                message: "Network Error : 500"

            }

        }
    }

    const getDoctor = async (id) => {
        try {
            const result = await contract.call("getDoctor", id)

            const parsedDoctor = {
                id: ethers.utils.formatEther(result.id.toString()),
                name: result.name,
                phone: result.phone,
                email: result.email,
                patients: result.patients,
                records: result.records,
                consent: result.consent
            }

            return parsedDoctor;

        }
        catch (err) {
            console.log(err)

            return {
                success: false,
                error: true,

                message: "Network Error : 500"
            }
        }
    }





    return (
        <StateContext.Provider value={{
            getAllDoctors, getAllPatients, getReportsOfPatient, getPatientsOfDoctor, getReportOfPatient, getDoctorsOfPatient,
            getRecordsOfDoctor, getConsent, getPatient, getDoctor, getAllConsentOfDoctor, getAllConsentOfPatient,RegisterDoctors,RegisterPatients,RegisterRecords,
            getAllPatient, address, connect, contract , getPatientByAddress,RegisterConsent,addDoctorToRecord,getDoctorByAddress,addDoctorToPatient,disconnect
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)