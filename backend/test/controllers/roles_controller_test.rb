require "test_helper"

class RolesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @role = roles(:one)
  end

  test "should get index" do
    get roles_url, as: :json
    assert_response :success
  end

  test "should create role" do
    assert_difference("Role.count") do
      post roles_url, params: { role: { acess_bed_type: @role.acess_bed_type, acess_cust: @role.acess_cust, acess_meet: @role.acess_meet, acess_meet_equi: @role.acess_meet_equi, acess_meet_ser: @role.acess_meet_ser, acess_quot: @role.acess_quot, acess_reserv: @role.acess_reserv, acess_room: @role.acess_room, acess_room_add_on_ser: @role.acess_room_add_on_ser, acess_room_equi: @role.acess_room_equi, acess_room_ser: @role.acess_room_ser, acess_room_type: @role.acess_room_type, department_id: @role.department_id, package: @role.package, position_id: @role.position_id, staff: @role.staff } }, as: :json
    end

    assert_response :created
  end

  test "should show role" do
    get role_url(@role), as: :json
    assert_response :success
  end

  test "should update role" do
    patch role_url(@role), params: { role: { acess_bed_type: @role.acess_bed_type, acess_cust: @role.acess_cust, acess_meet: @role.acess_meet, acess_meet_equi: @role.acess_meet_equi, acess_meet_ser: @role.acess_meet_ser, acess_quot: @role.acess_quot, acess_reserv: @role.acess_reserv, acess_room: @role.acess_room, acess_room_add_on_ser: @role.acess_room_add_on_ser, acess_room_equi: @role.acess_room_equi, acess_room_ser: @role.acess_room_ser, acess_room_type: @role.acess_room_type, department_id: @role.department_id, package: @role.package, position_id: @role.position_id, staff: @role.staff } }, as: :json
    assert_response :success
  end

  test "should destroy role" do
    assert_difference("Role.count", -1) do
      delete role_url(@role), as: :json
    end

    assert_response :no_content
  end
end
