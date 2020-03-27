initSidebarItems({"enum":[["Bool","Boolean specifying yes or no"],["CryptActivateFlag","Enum wrapping `CRYPT_ACTIVATE_*` flags"],["CryptDeactivateFlag","Flags for crypt deactivate operations"],["CryptDebugLevel","Debug log level"],["CryptKdf","Rust representation of key generator enum"],["CryptKeyfileFlag","Flags for reading keyfiles"],["CryptLogLevel","Logging levels"],["CryptPbkdfFlag","Enum wrapping `CRYPT_PBKDF_*` flags"],["CryptReencryptDirectionInfo","Reencryption direction flags"],["CryptReencryptFlag","Enum for `CRYPT_REENCRYPT_*` flags"],["CryptReencryptInfo","Encryption mode flags"],["CryptReencryptModeInfo","Encryption mode flags"],["CryptRequirementFlag","Wrapper enum for `CRYPT_REQUIREMENT_*` flags"],["CryptRngFlag","Rust representation of random number generator enum"],["CryptStatusInfo","Status of a crypt device"],["CryptTokenInfo","Wrapper enum for `CRYPT_TOKEN_*` values"],["CryptVerityFlag","Verity format flags"],["CryptVolumeKeyFlag","Flags for tunable options when operating with volume keys"],["CryptWipePattern","Pattern for disk wipe"],["Either","The enum `Either` with variants `Left` and `Right` is a general purpose sum type with two cases."],["EncryptionFormat","Device formatting type options"],["Interrupt","Boolean specifying yes or no"],["KeyslotInfo","Value indicating the status of a keyslot"],["KeyslotPriority","Value indicating the priority of a keyslot"],["LibcryptErr","Error returned from any libcryptsetup-rs function"],["LockState","State of memory lock"],["LuksType","LUKS type (1 or 2)"],["MetadataSize","Size allocated for metadata"]],"fn":[["status","Get status info from device name"]],"macro":[["c_confirm_callback","Create a C-compatible callback to determine user confirmation which wraps safe Rust code"],["c_logging_callback","Create a C-compatible logging callback which wraps safe Rust code"],["c_progress_callback","Create a C-compatible progress callback for wiping a device which wraps safe Rust code"],["c_str","Create a C-compatible static string with a null byte"],["c_token_handler_dump","Create a C-compatible callback for compatible with `CryptTokenHandler`"],["c_token_handler_free","Create a C-compatible callback for free compatible with `CryptTokenHandler`"],["c_token_handler_open","Create a C-compatible open callback compatible with `CryptTokenHandler`"],["c_token_handler_validate","Create a C-compatible callback for validate compatible with `CryptTokenHandler`"]],"struct":[["ActiveDevice","Record containing data on the given active device"],["CryptActivateFlags","Enum wrapping `CRYPT_ACTIVATE_*` flags"],["CryptActivation","Handle for activation options"],["CryptBackup","Handle for backup operations on a device"],["CryptContext","Cryptographic context for device"],["CryptDeactivateFlags","Set of flags for crypt deactivate operations"],["CryptDebug","Handle for backup operations on a device"],["CryptDevice","Data type that is a handle for a crypt device"],["CryptDeviceStatus","Handle for crypt device status operations"],["CryptFormat","Handle for format operations on a device"],["CryptInit","Initialization handle for devices"],["CryptKeyfile","Handle for keyfile operations"],["CryptKeyfileContents","Contents of a keyfile that have been read"],["CryptKeyfileFlags","Set of flags for reading keyfiles"],["CryptKeyslot","Handle for keyslot operations"],["CryptLog","Handle for logging operations"],["CryptLuks2Flags","Handle for LUKS2 persistent flag operations"],["CryptLuks2Reencrypt","Handle for reencryption operations"],["CryptLuks2Token","Handle for LUKS2 token operations"],["CryptParamsIntegrity","Parameters for integrity checking"],["CryptParamsIntegrityRef","A struct representing a reference with a lifetime to a `CryptParamsIntegrity` struct"],["CryptParamsLuks2","LUKS2-specific parameters"],["CryptParamsLuks2Ref","A struct representing a reference with a lifetime to a `CryptParamsLuks2Ref` struct"],["CryptParamsReencrypt","Parameters for reencryption operations"],["CryptParamsReencryptRef","A struct representing a reference with a lifetime to a `CryptParamsReencrypt` struct"],["CryptParamsVerity","Parameters specific to Verity"],["CryptPbkdfFlags","Wrapper for a set of CryptPbkdfFlag"],["CryptPbkdfType","Rust representation of `crypt_pbkdf_type`"],["CryptPbkdfTypeRef","A type wrapping a PBKDF type with pointers derived from Rust data types and lifetimes to ensure pointer validity"],["CryptReencryptFlags","Wrapper for a set of CryptReencryptFlag"],["CryptRequirementFlags","Set of `CryptRequirementFlag`s"],["CryptRuntime","Handle for runtime attribute options"],["CryptSettings","Handle to operate on cryptsetup device settings"],["CryptVerityFlags","Set of flags for Verity format"],["CryptVolumeKey","Handle for volume key operations"],["CryptVolumeKeyFlags","Set of volume key flags"],["CryptWipe","Handle for volume key operations"],["KeyslotsSize","Size in bytes for the keyslots."],["SafeBorrowedMemZero","Handle for zeroing borrowed memory. \"Borrowed\" in this context refers to memory that will be cleaned up by some other scope and is not required to be freed by the caller. An example of this would be a `char *` pointer to kernel memory where the caller can access the memory but is not responsible for its allocation or deallocation."],["SafeMemHandle","Handle to allocated memory from libcryptsetup"],["SafeOwnedMemZero","Handle for zeroing owned memory. \"Owned\" in this context refers to memory that has been allocated and stored in some kind of `char **` argument in the context of C FFI. This means that the memory has been allocated by standard C allocators and needs to be cleaned up by the caller. In the context of Rust, we would consider this owned by the current scope."]],"trait":[["SafeMemzero","A trait to be implemented for a segment of memory that can be explicitly zeroed in a way that will not be optimized away by the compiler."]],"type":[["Result","Result type to be used with `libcryptsetup-rs`"],["c_int","Re-exports `libc` types in API"],["c_uint","Re-exports `libc` types in API"],["size_t","Re-exports `libc` types in API"]]});