require "test_helper"

class ReservationRoomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reservation_room = reservation_rooms(:one)
  end

  test "should get index" do
    get reservation_rooms_url, as: :json
    assert_response :success
  end

  test "should create reservation_room" do
    assert_difference("ReservationRoom.count") do
      post reservation_rooms_url, params: { reservation_room: { reservation_id: @reservation_room.reservation_id, room_id: @reservation_room.room_id } }, as: :json
    end

    assert_response :created
  end

  test "should show reservation_room" do
    get reservation_room_url(@reservation_room), as: :json
    assert_response :success
  end

  test "should update reservation_room" do
    patch reservation_room_url(@reservation_room), params: { reservation_room: { reservation_id: @reservation_room.reservation_id, room_id: @reservation_room.room_id } }, as: :json
    assert_response :success
  end

  test "should destroy reservation_room" do
    assert_difference("ReservationRoom.count", -1) do
      delete reservation_room_url(@reservation_room), as: :json
    end

    assert_response :no_content
  end
end
