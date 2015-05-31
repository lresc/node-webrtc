
var FFI = require('ffi');
var ArrayType = require('ref-array');
var Struct = require('ref-struct');
var ref = require('ref');

var voidPtr = ref.refType(ref.types.void);

var shout_t = exports.shout_t = voidPtr;
var shout_tPtr = exports.shout_tPtr = ref.refType(shout_t);
var shout_metadata_t = exports.shout_metadata_t = voidPtr;
var shout_metadata_tPtr = exports.shout_metadata_tPtr = ref.refType(shout_metadata_t);

module.exports = new FFI.Library('libshout', {
    shout_init: [ref.types.void, []],
    shout_shutdown: [ref.types.void, []],
    shout_version: [ref.types.CString, [
        ref.refType(ref.types.int32),
        ref.refType(ref.types.int32),
        ref.refType(ref.types.int32),
    ]],
    shout_new: [shout_t, []],
    shout_free: [ref.types.void, [shout_tPtr]],
    shout_get_error: [ref.types.CString, [shout_tPtr]],
    shout_get_errno: [ref.types.int32, [shout_tPtr]],
    shout_get_connected: [ref.types.int32, [shout_tPtr]],
    shout_set_host: [ref.types.int32, [shout_tPtr, ref.types.CString]],
    shout_get_host: [ref.types.CString, [shout_tPtr]],
    shout_set_port: [ref.types.int32, [shout_tPtr, ref.types.ushort]],
    shout_get_port: [ref.types.ushort, [shout_tPtr]],
    shout_set_password: [ref.types.int32, [shout_tPtr, ref.types.CString]],
    shout_get_password: [ref.types.CString, [shout_tPtr]],
    shout_set_mount: [ref.types.int32, [shout_tPtr, ref.types.CString]],
    shout_get_mount: [ref.types.CString, [shout_tPtr]],
    shout_set_name: [ref.types.int32, [shout_tPtr, ref.types.CString]],
    shout_get_name: [ref.types.CString, [shout_tPtr]],
    shout_set_url: [ref.types.int32, [shout_tPtr, ref.types.CString]],
    shout_get_url: [ref.types.CString, [shout_tPtr]],
    shout_set_genre: [ref.types.int32, [shout_tPtr, ref.types.CString]],
    shout_get_genre: [ref.types.CString, [shout_tPtr]],
    shout_set_user: [ref.types.int32, [shout_tPtr, ref.types.CString]],
    shout_get_user: [ref.types.CString, [shout_tPtr]],
    shout_set_agent: [ref.types.int32, [shout_tPtr, ref.types.CString]],
    shout_get_agent: [ref.types.CString, [shout_tPtr]],
    shout_set_description: [ref.types.int32, [shout_tPtr, ref.types.CString]],
    shout_get_description: [ref.types.CString, [shout_tPtr]],
    shout_set_dumpfile: [ref.types.int32, [shout_tPtr, ref.types.CString]],
    shout_get_dumpfile: [ref.types.CString, [shout_tPtr]],
    shout_set_audio_info: [ref.types.int32, [shout_tPtr, ref.types.CString, ref.types.CString]],
    shout_get_audio_info: [ref.types.CString, [shout_tPtr, ref.types.CString]],
    shout_set_public: [ref.types.int32, [shout_tPtr, ref.types.uint32]],
    shout_get_public: [ref.types.uint32, [shout_tPtr]],
    shout_set_format: [ref.types.int32, [shout_tPtr, ref.types.uint32]],
    shout_get_format: [ref.types.uint32, [shout_tPtr]],
    shout_set_protocol: [ref.types.int32, [shout_tPtr, ref.types.uint32]],
    shout_get_protocol: [ref.types.uint32, [shout_tPtr]],
    shout_set_nonblocking: [ref.types.int32, [shout_tPtr, ref.types.uint32]],
    shout_get_nonblocking: [ref.types.uint32, [shout_tPtr]],
    shout_open: [ref.types.int32, [shout_tPtr]],
    shout_close: [ref.types.int32, [shout_tPtr]],
    shout_send: [ref.types.int32, [shout_tPtr, ref.refType(ref.types.uchar), ref.types.int32]],
    shout_send_raw: [ref.types.int32, [shout_tPtr, ref.refType(ref.types.uchar),  ref.types.int32]],
    shout_queuelen: [ref.types.int32, [shout_tPtr]],
    shout_sync: [ref.types.void, [shout_tPtr]],
    shout_delay: [ref.types.int32, [shout_tPtr]],
    shout_set_metadata: [ref.types.int32, [shout_tPtr, shout_metadata_t]],
    shout_metadata_new: [shout_metadata_tPtr, []],
    shout_metadata_free: [ref.types.void, [shout_metadata_tPtr]],
    shout_metadata_add: [ref.types.int32, [shout_metadata_tPtr, ref.types.CString, ref.types.CString]],
});